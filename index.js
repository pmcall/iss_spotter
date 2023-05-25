const { callbackify } = require('util');
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };


  console.log('It worked! Returned IP:' , ip);

  // fetchCoordsByIP(ip, (error, location) => {
  //   if (error) {
  //     console.log("It didn't work!" , error);
  //     return;
  //   }
  
  //   console.log('It worked! Returned location:' , location);
  // });

  fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }

    console.log('It worked! Returned flyover times:' , passTimes);
});



})
