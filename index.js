const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };


  // console.log('It worked! Returned IP:' , ip);

  fetchCoordsByIP(ip, (error, location) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
  
    // console.log('It worked! Returned location:' , location);
  });

  fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }

    // console.log('It worked! Returned flyover times:' , passTimes);
  });

  const printPassTimes = function(passTimes) {
    for (const pass of passTimes) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(pass.risetime);
      const duration = pass.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    }
  };


  nextISSTimesForMyLocation((error, passTimes) => {
    if (error) {
      return console.log("It didn't work!", error);
    }
    printPassTimes(passTimes);
  });

});
