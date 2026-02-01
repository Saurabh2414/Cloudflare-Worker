export default {
  async fetch(request, env) {
    const key = request.headers.get("x-api-key");
    if (key !== env.SECRET_KEY) {
      return new Response("Unauthorized", { status: 401 });
    }

    return new Response(
      JSON.stringify({
        status: "ok",
        message: "Secure Cutcraving discovery bot"
      }),
      { headers: { "content-type": "application/json" } }
    );
  }
};
