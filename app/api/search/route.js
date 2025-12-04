export async function POST(req) {
    const body = await req.json();
    debugger;
    const res = await fetch('http://103.30.72.94:8011/distinctCount', {
        
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWJjOmFiY0AxMjM=',
      },
      
      body: JSON.stringify(body),
    });
  
    const data = await res.json();
    console.log(data);
    return Response.json(data);
  }
