// // // // // // ///object literals
// // // // // // const MySym = Symbol("key1")
// // // // // // const jsUser ={
// // // // // //     name : "Bibek",
// // // // // //     MySym:"mykey1",
// // // // // //     age: 18,
// // // // // //     location: "butwal",
// // // // // //     email: "bibek@gmail.com",
// // // // // //     isLoggedIn: false,
// // // // // //     lastLoginDays: ['monday','saturday']
// // // // // // }
// // // // // // console.log(jsUser)



// // // // // const tinderUser ={}
// // // // // tinderUser.id="123abc"
// // // // // tinderUser.Name ="sammy"
// // // // // tinderUser.isLoggedIn = false
// // // // // console.log(tinderUser);
// // // // const regularUser = {
// // // //     email:"hiiambibek@gmail.com",
// // // //     fullname:{
// // // //         userfullname: {
// // // //             firstname: "bibek",
// // // //             lastname: "pandey"
// // // //         }
// // // //     }
    

// // // //     }

// // // // console.log(regularUser.fullname.userfullname.firstname.lastname);


// // // const obj1 = {1: "a" , 2: "b"}
// // // const obj2 = {3: "a" , 4: "b"}
// // // const obj3 = {obj1 , obj2}
// // // console.log(obj1[1]);
// // // console.log(obj3);





// // ////////////////////////////////////////////////////////////
// // // d-strcutred
// // ////////////////////////////////////////////////////////////


// // const course = {
// //     coursename:"js in hindi",
// //     price: "9999",
// //     courseINstructior: "bibek"
// // }
// // ///course.courseInstructor
// // const {courseINstructior} = course
// // console.log(courseINstructior);

// const {courseInstructior: instructor} = course
// console.log(instructor);
// // {
// //     "name": "bibek",
// //     "coursename" : "js programming languague",
// //     "price":"free"
// // }