"use client";

import { useEffect, useState } from "react";
import sdk, {
  type FrameContext,
} from "@farcaster/frame-sdk";
export default function Demo(
  { title }: { title?: string } = { title: "Farcaster Stacks" }
) {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<FrameContext>();
  useEffect(() => {
    const load = async () => {
      setContext(await sdk.context);
      sdk.actions.ready();
    };
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ position: 'relative', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0 }}>

      {context && (
        <div
          style={{
            color: 'yellow',
            padding: 10,
            fontFamily: 'monospace',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 10,
          }}
        >
          <p>Player: @{context.user?.username}</p>
        </div>
      )}

      {/* Centered iframe */}
      <iframe
        src="https://htmlxm.github.io/h2/stack/"
        style={{
          width: '90%',
          height: '90%',
          border: 'none',
        }}
        title = {title}
      ></iframe>
    </div>
  );
}
