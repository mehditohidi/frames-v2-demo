export async function GET() {
  const config = {
    accountAssociation: {
    header: "eyJmaWQiOjI2ODU0MCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDk3QzgxM2I5ODQzYzM3ODI2NDMzNWRjMDQxNTgxNmUzNjI5YUM4MjQifQ",
    payload: "eyJkb21haW4iOiJmYXJjYXN0ZXItbWVtb3J5LnZlcmNlbC5hcHAifQ",
    signature: "MHhlOGZiNGRkODZlNzMwMTI5MmZhY2E2ZWY3ZmVmNzNjYTc2ODg3ODA5OGEyNmY1NThkY2EzOGVlN2NhNjc1YTVlNzFkZjFlZDU0OWIwMTNlYWJiZWE4MTdkNWZhMjRkNjdhYTRhNDRjMjlkYjNkYjcxYjM3MTY2N2JlNjk1MDVmZjFi"
  },

  
   frame: {
    name: "Far Stacks",
    version: "1.0.0",
    iconUrl: "https://farcaster-memory.vercel.app/dart.png",
    homeUrl: "https://farcaster-memory.vercel.app/",
    splashImageUrl: "https://farcaster-memory.vercel.app/splash.png",
    splashBackgroundColor: "#eeccff",
  }
  };

  return Response.json(config);
}