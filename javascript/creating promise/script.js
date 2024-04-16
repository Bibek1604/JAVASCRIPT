const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Async task is complete');
      resolve(); // Resolve the Promise after the async task is complete
    }, 3000);
  });
  
  promiseOne.then(function() {
    console.log("promise consumed");
  });



// const oldPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task 2 completed");
//         resolve();`
//     },1000);
// })

// oldPromise.then(function(){
//     console.log('consumed');
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username : "chai",email : "example.com"})

//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)

// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({ username: "Bibek", password: "pandey" });
//         } else {
//             reject('Error: something went wrong');
//         }
//     }, 2000);
// });

// promiseFour.then(function(user){
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// });
