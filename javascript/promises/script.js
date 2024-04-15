const promiseOne = new Promise(function(resolve, reject) {
    // do an async task and then resolve or reject the promise 
    // db call, cryptography, network request
    setTimeout(function() {
        console.log('Async task is completed');
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log("Promise is consumed");
});

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Task is completed");
        resolve();
    }, 2000);
}).then(function() {
    console.log("Promise is consumed");
});
