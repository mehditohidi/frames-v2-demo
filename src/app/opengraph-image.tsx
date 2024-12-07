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
          backgroundColor: 'yellow'
        }}
      >
        <h1 style={{color:'black'}}>Henlo Memory Game</h1>
      </div>

    ),
    {
      ...size,
    }
  );
}
