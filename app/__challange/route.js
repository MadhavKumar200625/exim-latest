export async function GET(req) {
    const url = new URL(req.url);
    const redirectTo = url.searchParams.get("u") || "/";
  
    const html = `<!doctype html>
  <html>
  <head><meta charset="utf-8"><title>Checking…</title></head>
  <body>
    <p>Verifying your browser…</p>
    <script>
      (function(){
        const token = "ok-" + Math.floor(Math.random()*1e9);
        document.cookie = "x_challenge_ok=" + token + "; path=/; max-age=3600; SameSite=Lax";
        setTimeout(()=>{ window.location.href = "${redirectTo}"; }, 400);
      })();
    </script>
  </body>
  </html>`;
  
    return new Response(html, {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }