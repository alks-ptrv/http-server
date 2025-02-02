export default defineEventHandler((event) => {
    setResponseHeaders(event, {
        "Content-Type": 'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    // console.log(event, 'event -------------------');

    // console.log(event.node.req.originalUrl, 'event.originalUrl -------------------');

    return { headers: event.node.req.headers, originalUrl: event.node.req.originalUrl }
  })
