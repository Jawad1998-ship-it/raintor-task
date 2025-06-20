"use client";
import { useEffect, useState } from "react";
import {
  HubConnectionBuilder,
  LogLevel,
  HubConnection,
} from "@microsoft/signalr";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { LocationData } from "@/types/types";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

function useSignalR(hubUrl: string) {
  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [receivedLocation, setReceivedLocation] = useState<LocationData | null>(
    null
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    import("leaflet").then((L) => {
      type LeafletIconPrototype = L.Icon.Default.prototype & {
        _getIconUrl?: string;
      };

      const iconPrototype = L.Icon.Default.prototype as LeafletIconPrototype;

      delete iconPrototype["_getIconUrl"];

      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    });

    const newConnection = new HubConnectionBuilder()
      .withUrl(hubUrl)
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);

    newConnection
      .start()
      .then(() => {
        console.log("SignalR Connected Successfully!");

        newConnection.on(
          "ReceiveLatLon",
          (lat: number, lon: number, userName: string) => {
            setReceivedLocation({ lat, lon, userName });
          }
        );
      })
      .catch((err) => console.error("SignalR Connection Error: ", err));

    return () => {
      newConnection.stop().then(() => console.log("SignalR Disconnected."));
    };
  }, [hubUrl, isClient]);

  const sendLocation = async (lat: number, lon: number, userName: string) => {
    if (connection && connection.state === "Connected") {
      try {
        await connection.invoke("SendLatLon", lat, lon, userName);
      } catch (err) {
        console.error("Error sending location via SignalR: ", err);
      }
    } else {
      console.error("Cannot send location, SignalR connection is not active.");
    }
  };

  return { receivedLocation, sendLocation, isClient };
}

export default function LocationSharing() {
  const HUB_URL = "https://your-signalr-hub-url.com/locationHub";

  const userEmail = "jawad.taj1998@gmail.com";
  const { receivedLocation, sendLocation, isClient } = useSignalR(HUB_URL);

  const [lat, setLat] = useState(25.73736464);
  const [lon, setLon] = useState(90.3644747);

  const simulateLocation = () => {
    const newLat = lat + (Math.random() - 0.5) * 0.01;
    const newLon = lon + (Math.random() - 0.5) * 0.01;
    setLat(newLat);
    setLon(newLon);
    sendLocation(newLat, newLon, userEmail);
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 font-sans">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Real-Time Location Sharing
        </h1>
        <div className="text-center text-gray-500 py-10">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Real-Time Location Sharing
      </h1>

      <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          User A: Send Location
        </h2>
        <p>
          <span className="font-semibold">Latitude:</span> {lat.toFixed(6)}
        </p>
        <p>
          <span className="font-semibold">Longitude:</span> {lon.toFixed(6)}
        </p>
        <button
          onClick={simulateLocation}
          className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
        >
          Send Simulated Location
        </button>
      </div>

      <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          User B: Receive Location
        </h2>
        {receivedLocation ? (
          <>
            <div className="mb-4 space-y-1">
              <p>
                <span className="font-semibold">User:</span>{" "}
                {receivedLocation.userName}
              </p>
              <p>
                <span className="font-semibold">Latitude:</span>{" "}
                {receivedLocation.lat.toFixed(6)}
              </p>
              <p>
                <span className="font-semibold">Longitude:</span>{" "}
                {receivedLocation.lon.toFixed(6)}
              </p>
            </div>
            <MapContainer
              center={[receivedLocation.lat, receivedLocation.lon]}
              zoom={13}
              style={{ height: "300px", width: "100%", borderRadius: "8px" }}
              key={Date.now()}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[receivedLocation.lat, receivedLocation.lon]}>
                <Popup>{receivedLocation.userName}&apos;s Location</Popup>
              </Marker>
            </MapContainer>
          </>
        ) : (
          <div className="text-center text-gray-500 py-10">
            <p>Waiting for location updates...</p>
          </div>
        )}
      </div>
    </div>
  );
}
