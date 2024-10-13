import { geolocation } from '@vercel/functions';
 
export function GET(request: Request) {
  const { city } = geolocation(request);
  return Response.json({ city });
  // return new Response(`<h1>${city}</h1>`, {
  //   headers: { 'content-type': 'text/html' },
  // });
}


 