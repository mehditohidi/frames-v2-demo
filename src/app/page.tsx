import { Metadata } from "next";
import App from "./app";

const appUrl = "https://farcaster-memory.vercel.app";

const frame = {
  version: "next",
  imageUrl: `${appUrl}/opengraph-image`,
  button: {
    title: "Play Stacks",
    action: {
      type: "launch_frame",
      name: "Stacks",
      url: appUrl,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
    },
  },
};

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Launch Memory",
    openGraph: {
      title: "Farcaster Memory",
      description: "A Game By Sefiyed",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function Home() {
  return (<App />);
}
