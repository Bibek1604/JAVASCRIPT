const h2all = document.querySelectorAll('h2');
console.log(h2all);
h2all[0].innerHTML;
h2all.forEach(function(h){
    h.style.color="red";
    h.style.backgroundColor="yellow";
    h.style.padding="10px";
    h.style.border="1px solid black";  
    h.style.textAlign="center";
});