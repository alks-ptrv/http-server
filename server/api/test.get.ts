export default defineEventHandler((event) => {
    console.log(event.node.req.headers, 'event.node.req.headers');
    
    // event.context.path to get the route path: '/api/foo/bar/baz'
    // event.context.params._ to get the route segment: 'bar/baz'
    // response.setHeader('Content-Type', 'application/json');
    // response.setHeader('Access-Control-Allow-Origin', '*');
    // event.setHeader('Content-Type', 'application/json');
    // event.node.req.setHeader('Access-Control-Allow-Origin', '*');

    setResponseHeaders(event, {
        "Content-Type": 'application/json',
        'Access-Control-Allow-Origin': '*'
    });


    return event.node.req.headers
  })
