import localFont from "next/font/local";

export const sportingGrotesque = localFont({
  src: [
    {
      path: "./fonts/SportingGrotesque-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SportingGrotesque-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const bwGradualDEMO = localFont({
  src: [
    {
      path: "./fonts/BwGradualDEMO-Bold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
});
