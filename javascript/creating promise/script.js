const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Async task is complete');
      resolve(); // Resolve the Promise after the async task is complete
    }, 3000);
  });
  
  promiseOne.then(function() {
    console.log("promise consumed");
  });