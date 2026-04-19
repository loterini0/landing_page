export async function POST(req: Request) {
  return new Response(JSON.stringify({ message: "OK" }), {
    status: 200,
  });
}