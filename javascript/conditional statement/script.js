// console.log("hello world");


//operators in js || use to do some expression or operator

//addition

// a=prompt("enter the First value: ");
// b=prompt("enter the second value: ");
// c=parseInt(a)+parseInt(b);
// console.log("addition is: ",c);

//modulus(reminder)

// a=prompt("enter the First value: ");
// b=prompt("enter the second value: ");
// c=a%b,
// console.log("modulus is: ",c)


//exponential(power)

// a=prompt("Enter the first  number to get power: ");
// b=prompt("Enter the second number to get power: ")
// c=a**b;
// console.log("exponential is: ",c);



// ###############################################################
//                       UNARY OPERATORS
// ###############################################################
///increment ++

// [[[[post increment]]]]
// a=prompt("enter the number : ");
// console.log(a)
// console.log(a++)
// console.log(a)

// [[[[pre increment]]]]

// a=prompt("enter the number : ");
// console.log(a)
// console.log(++a)

/// decrement --

















// ###############################################################
//                       ASSIGNMENT OPERATORS
// ###############################################################


//addition//
// let a =parseInt(prompt("enter the number: "));
// a += parseInt(prompt("enter the number: "));;
// console.log(a)


//subtraction//

// let a =parseInt(prompt("enter the number: "));
// a -= parseInt(prompt("enter the number: "));
// console.log(a);

// modulus

// let a =parseInt(prompt("enter the number: "));
// a %= 5
// console.log(a)


//exponetital
// let a =parseInt(prompt("enter the number: "));
// a *= 5;
// console.log(a);



// ###############################################################
// #                      Comperison OPERATORS                   #
// ###############################################################

// ##Equal to
// a=parseInt(prompt("enter the first number: "));
// b=parseInt(prompt("enter the second number: "));
// console.log("a == b: ",a==b) ;



// ###is not Equal to
// a=parseInt(prompt("Enter the first number: "));
// b=parseInt(prompt("Enter the second number: "));
// console.log(a != b);


// ###############################################################
// #                      Comperison OPERATORS                   #
// ###############################################################



// Logical AND &&

// a=parseInt(prompt("Enter the first number: "));
// b=parseInt(prompt("Enter the second number: "));
// c= a>b;
// d= a===b;
// console.log(c && d);



// Logical Or ||
// a=parseInt(prompt("Enter the first number: "));
// b=parseInt(prompt("Enter the second number: ")); 
// c= a>b;
// console.log(c)


//###############################################################
// #                           CONDITIONAL STATEMENT                 #
// ###############################################################

// let a =parseInt(prompt("Enter the number: "))
// if (a>18){
//     console.log('you can vote!')
// }
// else {
//     console.log("you can't vote!")
// }


// let mode = prompt("Enter the color: ")
// let color;

// if(mode  === 'dark'){
//     color = "black";
// }
// if (mode === 'light'){
//     color="white";
// }
// console.log(color);


// ##conditional senten ce to print number even or odd
// let a=parseInt(prompt("Enter the number : "));
// let number;
// if (a % 2 == 0){
//     number = "Even";
// }
// else{
//   number = "odd";
// }
// console.log(number)

// ####qstn3
// let mode=prompt("Enter the color: ");
// let color;
// if(mode === "dark"){
//     color="black";
// }
// else if (mode === "blue")
// {
//     color="blue";
// }
// else if(mode === "pink")
// {
//     color="pink";
// }
// else{
//     color="white";
// }
// console.log(color);


/////
let a=parseInt(prompt("enter the number: "));
let number;
if (a  >= 80){
    number = "It is A";
}
else if (a >= 70){
  number = "It is B";
}
else if (a >= 60){
    number = "It is C";
}
else if (a >= 50){
    number = "It is D";
}
else{
    number="it is F";
}

console.log(number)