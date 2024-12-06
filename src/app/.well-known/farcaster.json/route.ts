export async function GET() {
  const config = {
   accountAssociation: {
    header: "eyJmaWQiOjI2ODU0MCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDk3QzgxM2I5ODQzYzM3ODI2NDMzNWRjMDQxNTgxNmUzNjI5YUM4MjQifQ",
    payloa: "eyJkb21haW4iOiJodHRwczovL21pbmlkYXJ0LW9zYnRlYW0udmVyY2VsLmFwcC8ifQ",
    signature: "MHgyNTc2ZWQzYjEzMGFlZmFlYzI2ZDE3MDg3ZDI1MDE0NTc2ZDdiYWUyNGE5YjVmZTQxZmNhYmUxZGQ4YjY2NTBhMzMxNTYwZThjYjFjMDRkMzA1YjI5Yjg4NDk2MGNkMGUxNzk1NThlYTkxNjJjMTRhODdlNWQ3MTI5MDcyYzAwZTFi"
  },
   frame: {
    name: "FAR DART",
    version: "1.0.0",
    iconUrl: "https://minidart.vercel.app/dart.png",
    homeUrl: "https://minidart.vercel.app/",
    splashImageUrl: "https://minidart.vercel.app/splash.png",
    splashBackgroundColor: "#eeccff",
  }
  };

  return Response.json(config);
}