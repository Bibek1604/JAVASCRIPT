{/* <script>
const daYa = document.querySelectorAll('.New .day'); // Selecting individual children
<!--         
<!-- for(let i = 0; i < daYa.length; i++) {
    console.log(daYa[i].innerHTML); // Logging inner HTML of each child
    daYa[1].style.color = "red"; // Changing color of each child to red
}
daya.children[0].style.color="orange";
console.log(daya.children[0].innerHTML); -->
</script> --> */}

const parent = document.querySelector(".New");
console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0].innerHTML);
 
// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);
// }

// parent.children[1].style.color = "red";
// console.log(parent.children[1]);

const dayOne=document.querySelector(".day");
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);
console.log("Nodes: ", dayOne.childNodes);