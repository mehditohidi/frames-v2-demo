import { ImageResponse } from "next/og";

export const alt = "Farcaster Memory";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex flex-col justify-center items-center relative"
        style={{
          backgroundImage: "url('https://farcaster-memory.vercel.app/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 tw="text-6xl">Farcaster Memory</h1>
      </div>

    ),
    {
      ...size,
    }
  );
}
