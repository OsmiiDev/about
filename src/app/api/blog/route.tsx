export async function GET(request: Request) {
  const host = request.headers.get('Host');
  console.log(host);
  const data = await fetch(
      new URL('/blog/_data.json?etag=1', `http://${host}`),
  );
  const {posts} = await data.json();

  return new Response(JSON.stringify(posts), {headers: {'Content-Type': 'application/json'}});
}
