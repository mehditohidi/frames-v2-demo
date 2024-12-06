export async function GET() {
  const config = {
    accountAssociation: {
      header: "eyJmaWQiOjI2ODU0MCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDk3QzgxM2I5ODQzYzM3ODI2NDMzNWRjMDQxNTgxNmUzNjI5YUM4MjQifQ",
      payload: "eyJkb21haW4iOiJzdGFjay1ibG9uZC52ZXJjZWwuYXBwLyJ9",
      signature: "MHg3YWQ2ZWNiMjIyM2FiMDFlNjZiMzRlMWFjMmZkOWZlZTVlNDlkYjYyZTk5YzFmNzIyNDNjMmQ4YmE3MTczOWNlNTczMzNkOTViNzY3ZGE5MjE4N2Q1OTgzZTIwMzRmZTlhZDhmYmUzNWRkMmUzOWM0OTYyYjhmNzFhNWFmZWM4YzFi"
    },
  
   frame: {
    name: "Far Stacks",
    version: "1.0.0",
    iconUrl: "https://stack-blond.vercel.app/dart.png",
    homeUrl: "https://stack-blond.vercel.app/",
    splashImageUrl: "https://stack-blond.vercel.app/splash.png",
    splashBackgroundColor: "#eeccff",
  }
  };

  return Response.json(config);
}