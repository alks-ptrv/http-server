export default (request, response) => {
  // const data = {
  //   name: 'dombook/dombook/nuxt',
  //   version: process.env.PKG_VERSION,
  //   buildDateTime: process.env.BUILD_DATE_TIME,
  // };

  response.setHeader('Content-Type', 'application/json');
  response.setHeader('Access-Control-Allow-Origin', '*');


  console.log(response.req.rawHeaders, 'response.rawHeaders--------------------------');



  response.end(JSON.stringify(response.req.rawHeaders));
};
