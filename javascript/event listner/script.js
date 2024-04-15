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
//background color change on button click

// btn.addEventListener('click', bgColor); // add different color on background
// btn.removeEventListener("click", bgColor);// remove different color on backgorund

// ////
btn.addEventListener('mouseover', bgColor); // add different color on background
btn.addEventListener('mouseover', function() {
    // Your code to run when the mouse hovers over the element
    box.style.backgroundColor = 'lightgreen';
  });

///keys get vissible if we click on any key
  const textbox = document.querySelector('#textbox');
  const output =  document.querySelector('#output'); // Assuming you have an element with id "output"
  textbox.addEventListener("keydown", (event) => {
      output.textContent = `You have pressed "${event.key}"`;
  });



  ///images get remove while clicking them
const img = document.querySelector('#img');
img.addEventListener('click',function(e){
    console.log(e)
    const remove = e.target.parentNode;
    remove.remove()

})


///event added while clicking the box
const textbox1 = document.querySelector("#textbox");
textbox1.addEventListener('click', function(e) {
    console.log(e);
    const rem= e.target.tagName;
    e.target.remove();

});