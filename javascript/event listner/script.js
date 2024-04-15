document.getElementById('ar').addEventListener('click', function(e) {
    alert("event added to the button")
    console.log(e);
});


document.getElementById('ktm').addEventListener('click', function(e) {
    alert("you have tapped on ktm city")
    console.log(e); 

})

document.getElementById('pkr').addEventListener('click', function(e) {
    alert("you have tapped on pokhara city")
    console.log(e);
})

const btn = document.querySelector('button');

function bgColor() {
    const color = ['red', 'green', 'blue', 'yellow', 'black', 'purple', 'pink', 'orange'];
    const random = Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor = color[random];

}

btn.addEventListener('click', bgColor); // add different color on background
btn.removeEventListener("click", bgColor);// remove different color on backgorund
