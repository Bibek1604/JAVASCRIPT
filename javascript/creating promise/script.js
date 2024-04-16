// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       console.log('Async task is complete');
//       resolve(); // Resolve the Promise after the async task is complete
//     }, 3000);
//   });
  
//   promiseOne.then(function() {
//     console.log("promise consumed");
//   });



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



let isOrderAccepted = false;
let isValvetFound = false;
let hasResturantSeenYourOrder = false;
let resturnatTimer = null;

window.addEventListener('load', function() {
    document.getElementById('acceptOrder').addEventListener('click', function() {
        askRestuantToAcceptOrReject();
    });

    // Move this inside the event listener to ensure it's called after the page has loaded
    checkIfOrderAcceptedFromResturant()
        .then(isOrderAccepted => {
            console.log("Updated from restaurant", isOrderAccepted);
            if (isOrderAccepted) {
                alert('Your order has been accepted.');
            } else {
                alert('Sorry, your order cannot be processed.');
            }
        })
        .catch(err => {
            console.error(err);
            alert("Something went wrong! Please try again later.");
        });
});


// Step 1: Checking whether the restaurant has accepted the order or not 
// In the callback, there is a fixed time 
function askRestuantToAcceptOrReject() {
    setTimeout(function() {
        isOrderAccepted = confirm("Should the restaurant accept the order or not?");
        hasResturantSeenYourOrder = true;
        console.log(isOrderAccepted);
    }, 1000);
}

// Step 2: Check whether the restaurant accepted the order or not 
// In the promise, there is no fixed time 
function checkIfOrderAcceptedFromResturant() {
    return new Promise(function(resolve, reject) {
        resturnatTimer = setInterval(function() {
            console.log("Checking if the order is accepted or not");
            if (!hasResturantSeenYourOrder) return;

            clearInterval(resturnatTimer); // Clear the interval before resolving the promise

            if (isOrderAccepted) {
                resolve(true);
            } else {
                resolve(false);
            }
        }, 2000);
    });
}
