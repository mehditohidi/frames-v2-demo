import { Metadata } from "next";
import App from "~/app/app";

const appUrl = 'https://minidart.vercel.app';

const frame = {
  version: "next",
  imageUrl: `${appUrl}/frames/hello/opengraph-image`,
  button: {
    title: "Launch Mini Dart",
    action: {
      type: "launch_frame",
      name: "Farcaster Mini Dart",
      url: `${appUrl}/frames/hello/`,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
    },
  },
};

export const metadata: Metadata = {
  title: "Hello, world!",
  description: "A simple hello world frame",
  openGraph: {
    title: "Hello, world!",
    description: "A simple hello world frame",
  },
  other: {
    "fc:frame": JSON.stringify(frame),
  },
};

export default function HelloFrame() {
  return <App title={"Hello, world!"} />;
}
