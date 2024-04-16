
const cart = ['shoes','pants','slippers']

const promise = createOrder(cart);
promise.then(function(orderId){
    console.log(orderId);
})
``
function createOrder(cart){
    const pr =new promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err = new Error ("cart is not valid");
        }
        const orderId="12345"
        if(orderId){
            setTimeout (function (){
                resolve(orderId);

            },5000);
        }
    });
    return pr;
}

function validateCart(cart){
    return true;
}