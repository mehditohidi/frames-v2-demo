import { Metadata } from "next";
import App from "./app";

const appUrl = "https://minidart.vercel.app";

const frame = {
  version: "next",
  imageUrl: `${appUrl}/opengraph-image`,
  button: {
    title: "Launch FARDART",
    action: {
      type: "launch_frame",
      name: "MINI FARDART",
      url: appUrl,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
    },
  },
};

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Launch FARDART",
    openGraph: {
      title: "Farcaster Mini Dart",
      description: "A Game by TheMehT",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function Home() {
  return (<App />);
}
