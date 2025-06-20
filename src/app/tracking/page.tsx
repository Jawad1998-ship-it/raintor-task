"use client";
import { useEffect, useState } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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

function useSignalR(userEmail: string) {
  const [connection, setConnection] = useState<any>(null);
  const [receivedLocation, setReceivedLocation] = useState<{
    userName: string;
    lat: number;
    lon: number;
  } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const connect = new HubConnectionBuilder()
      .withUrl("https://tech-test.raintor.com/Hub")
      .configureLogging(LogLevel.Information)
      .build();

    connect.on(
      "ReceiveLatLon",
      (userName: string, lat: number, lon: number) => {
        setReceivedLocation({ userName, lat, lon });
      }
    );

    connect
      .start()
      .then(() => {
        console.log("SignalR Connected");
        setConnection(connect);
      })
      .catch((err) => console.error("SignalR Connection Error: ", err));

    return () => {
      connect.stop();
    };
  }, [userEmail]);

  const sendLocation = async (lat: number, lon: number, userName: string) => {
    if (connection) {
      try {
        await connection.invoke("SendLatLon", lat, lon, userName);
      } catch (err) {
        console.error("Error sending location: ", err);
      }
    }
  };

  return { connection, receivedLocation, sendLocation };
}

export default function LocationSharing() {
  const userEmail = "jawad.taj1998@gmail.com";
  const { receivedLocation, sendLocation } = useSignalR(userEmail);
  const [lat, setLat] = useState(25.73736464);
  const [lon, setLon] = useState(90.3644747);

  useEffect(() => {
    if (typeof window === "undefined") return;

    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  //simulate GPS movement
  const simulateLocation = () => {
    const newLat = lat + (Math.random() - 0.5) * 0.01;
    const newLon = lon + (Math.random() - 0.5) * 0.01;
    setLat(newLat);
    setLon(newLon);
    sendLocation(newLat, newLon, userEmail);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Real-Time Location Sharing</h1>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">User A: Send Location</h2>
        <p>Latitude: {lat.toFixed(6)}</p>
        <p>Longitude: {lon.toFixed(6)}</p>
        <button
          onClick={simulateLocation}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Simulated Location
        </button>
      </div>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">User B: Receive Location</h2>
        {receivedLocation ? (
          <>
            <p>User: {receivedLocation.userName}</p>
            <p>Latitude: {receivedLocation.lat.toFixed(6)}</p>
            <p>Longitude: {receivedLocation.lon.toFixed(6)}</p>
            <MapContainer
              center={[receivedLocation.lat, receivedLocation.lon]}
              zoom={13}
              style={{ height: "300px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[receivedLocation.lat, receivedLocation.lon]}>
                <Popup>{receivedLocation.userName}'s Location</Popup>
              </Marker>
            </MapContainer>
          </>
        ) : (
          <p>Waiting for location updates...</p>
        )}
      </div>
    </div>
  );
}
