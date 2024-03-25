// // // // // ##########editing and playing with differet selector inside the dom
// // // //  const h2all = document.querySelectorAll('h2');
// // // // console.log(h2all);
// // // // h2all[0].innerHTML;
// // // // h2all.forEach(function(h){
// // // //     h.style.color="red";
// // // //     h.style.backgroundColor="yellow";
// // // //     h.style.padding="10px";
// // // //     h.style.border="1px solid black";  
// // // //     h.style.textAlign="center";
// // // // });

// // // // function addlanguage(langname){
// // // //     const p =document.createElement('p');
// // // //     p.appendChild(document.createTextNode(langname));
// // // // }

// // // // addlanguage('nepali');
// // // // addlanguage('engllish');
// // // // // // addlanguage('hindi');

// // // // function adsLanguage(languageNAME){
// // // //     const p=document.createElement("p");
// // // //     p.appemndChild(document.createTextNode(languageNAME));
// // // // }

// // // // adsLanguage('nepali');
// // // // // adsLanguage('english');


// // // // function increase(inLanguage){
// // // //     const b=document.createElement("p");
// // // //     b.appendChild(document.createTextNode(inLanguage));
// // // // }

// // // // // function decrease(intLanguage)


// // // // // ####Edit element

// // // // const Secondlang =document.querySelector("li:nth-child(2)")
// // // // const newLi= document.createElement('li')
// // // // newLi.textContent="nepali";
// // // // Secondlang.replaceWith(newLi);

// // // // const FirstLang =document.querySelector("li:first-child")
// // // // const newl=document.createElement('li')
// // // // newl=text.content="TypeScript";
// // // // FirstLang.repalcewith(newl);


// // // // const Bibek = document.querySelector('li:first-child'); 
// // // // const pandey = document.createElement('li'); 
// // // // pandey.textContent = "TypeScript";
// // // // Bibek.replaceWith(pandey);


// // // // const apple = document.querySelector("li:nth-child(2)");
// // // // const aDay = document.createElement("li");
// // // // aDay.textContent="Python-Django";
// // // // apple.replaceWith(aDay);


// // // // const kera = document.querySelector("li:nth-child(3)");
// // // // const banana =document.createElement("li");
// // // // banana.textContent="java is Hero";
// // // // kera.replaceWith(banana);


// // // // const hehe =document.querySelector("li:nth-child(4)");
// // // // const haha=document.createElement("li");
// // // // haha.textContent="pphp";
// // // // hehe.replaceWith(haha);







// // // // const last=document.querySelector("li:first-child");
// // // // const first=document.createElement("li");
// // // // first.textContent="java";
// // // // last.replaceWith(first);

// // // const one=document.querySelector("li:nth-child(2)");
// // // const two=document.createElement('li');
// // // two.textContent="python";
// // // one.replaceWith(two);




// // // const three=document.querySelector("li:nth-child(2)");
// // // const four=document.createElement('li');
// // // four.textContent="snake";
// // // three.replaceWith(four);


// // // #####REMOVE ELEMENT

// // // const five =document.querySelector('li:nth-child(2)')
// // // five.remove();


// // // const six=document.querySelector('li:nth-child(3)')
// // // six.remove();

// // const dom =document.querySelector('li:nth-child(1)');
// // const vom =document.createElement('li');
// // vom.textContent="java";
// // dom.replaceWith(vom);

// // const som=document.querySelector('li:nth-child(1)');
// // som.remove();
// const div = document.createElement('div');
// console.log(div);
// div.className = "main";
// div.id = "haha";
// div.setAttribute('title', 'hello');
// div.style.color = "red";
// div.style.backgroundColor = "green";
// div.innerHTML = "I am learning JavaScript";
// const addText = document.createTextNode(" This is additional text.");
// div.appendChild(addText);
// document.body.appendChild(div);

const p=document.createElement('p');
p.className="para";
p.id="para";
p.innerHTML="in this case i am going to make js paragraph";
p.style.color="white";
p.style.backgroundColor="green";
p.style.fontSize="25px";
document.body.appendChild(p);


const li = document.createElement('li');
li.style.backgroundColor='green';
li.style.color='white';
li.style.fontSize='25px';
li.className='list';
li.id='list';
li.innerHTML="Here is the main course";
document.body.appendChild(li);


const h2 = document.createElement('h2');
h2.style.backgroundColor='green'
h2.style.color='white';
h2.className='heading';
h2.id='textField';
h2.innerHTML="this iw the para"
document.body.appendChild(h2);



const h4=document.createElement('h4');
h4.style.backgroundColor='green';
h4.style.color='white';
h4.innerHTML="this is the heading";
document.body.appendChild(h4);