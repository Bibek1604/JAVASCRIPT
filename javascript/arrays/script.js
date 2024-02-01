// // // // // // // // // ###creating array

// // // // // // // // // let marks_of_student=[97,93,23,123];
// // // // // // // // // console.log(marks_of_student);
// // // // // // // // // console.log(marks_of_student.length)

// // // // // // // // let hero=['rajesh dai','nikhildai','rajeshhamal'];
// // // // // // // // console.log(hero)
// // // // // // // // // console.log(hero.length)


// // // // // // // // ////Arryas in js
// // // // // // // // let mark=[97,93,23,123];
// // // // // // // // console.log(mark[3])
// // // // // // // // mark[0]=23;
// // // // // // // // console.log(mark[0])



// // // // // // // ///strings=immutable
// // // // // // // ///arrys=mutable

// // // // // // // // ======>  LOOPINS OVER ARRAY
// // // // // // // // let hero=['rajesh dai','nikhildai','rajeshhamal'];
// // // // // // // // for(let i=0; i<hero.length;i++){
// // // // // // // //     console.log(hero[i]);
// // // // // // // // }


// // // // // // // // for of
// // // // // // // // let cities=['butwal','ktm','pkr']
// // // // // // // // for(let i=0;i<cities.length;i++){
// // // // // // // //     console.log(cities[i]);
// // // // // // // //     console.log(cities.toUpperCase())
// // // // // // // // }

// // // // // // // // let mark=[85,97,44,37,76,60];
// // // // // // // // let sum=0;
// // // // // // // // for (let i of mark){
// // // // // // // //     sum=sum + i;
// // // // // // // // }
// // // // // // // // let avg =sum /mark.length;
// // // // // // // // console.log(avg);


// // // // // // // a=[20,43,23,35,56,75]
// // // // // // // let sum = 0;
// // // // // // // for (let i of a){
// // // // // // //     sum = sum+i;

// // // // // // // }
// // // // // // // let avg= sum/a.length;
// // // // // // // console.log(avg)


// // // // // // // let mark=[85,97,44,37,76,60]
// // // // // // // sum = 0;
// // // // // // // for (let i of mark){
// // // // // // //     sum = sum+i;
// // // // // // // }
// // // // // // // let avg=sum/mark.length;
// // // // // // // console.log(avg)




// // // // // // let mark=[85,97,44,37,76,60]
// // // // // // sum=0;
// // // // // // for(let i of mark){
// // // // // //     sum=sum+i;

// // // // // // }
// // // // // // let avg=sum/mark.length;
// // // // // // console.log(avg)

// // // // // // items=[250,645,300,900,50]
// // // // // // i=0;

// // // // // // for (let val of items){
// // // // // //     console.log('value at index ${i}=${val}');
// // // // // //     offer=val/10;
// // // // // //     items[i]=items[i]-offer;
// // // // // //     console.log(items[i]);
// // // // // //     i++;
    
// // // // // // }



// // // // // ///Arrays in JS///


// // // // // // Push() to add something at end
// // // // // // let veggie = ['tomato', 'potato', 'raddish'];
// // // // // // console.log(veggie);

// // // // // // veggie.push('mula');
// // // // // // console.log(veggie);


// // // // // // Pop() to delete something

// // // // // // let veggie=[ "tomato", "potato", "raddish", "mula" ];
// // // // // // console.log(veggie);
// // // // // // veggie.pop();
// // // // // // console.log(veggie);

// // // // // // to String() :::convert array to string 
// // // // // // let veggie=[ "tomato", "potato", "raddish", "mula" ];
// // // // // // console.log(veggie);
// // // // // // console.log(veggie.toString());
// // // // // // console.log(veggie)


// // // // // // let mark=[23,321,12,32,12,32];
// // // // // // console.log(mark);
// // // // // // console.log(mark.toString());
// // // // // // console.log(mark)



// // // // // // Arrys in js

// // // // // // concat()::join multiple arrays 
// // // // // // bibek.concat(pandey)



// // // // // // unshift()::add to start
// // // // // // name.unshift("bibek")


// // // // // // shift():: delete from start and return
// // // // // // name.shift("bibek")

// // // // // //slice():return apiece of arraty
// // // // // // name.slice(1,3)

// // // // // //splice():change  original arrays(add,remove,replace)

// // // // // // let arr=[1,2,4,5,32,43,34];
// // // // // // arr.splice(1,2,12,23,12,23)
// // // // // // console.log(arr)


// // // // // ///add elements
// // // // // // let arr=[1,2,3,4,5,6,7,8,9]
// // // // // // arr.splice(2, 1 ,101)
// // // // // // console.log(arr)



// // // // // ////practise question

// // // // // ///create an array to store company

// // // // // // let companies=['bllomberg','microsoft','uber','google','ibm','nrtflix']
// // // // // // console.log(companies)


// // // // // ///removing fist name from arrray

// // // // // // let companies=['bllomberg','microsoft','uber','google','ibm','nrtflix']
// // // // // // companies.shift('bloomberg')
// // // // // // console.log(companies)


// // // // // ////remove ubcer & ola

// // // // // // let companies=['bllomberg','microsoft','uber','google','ibm','nrtflix']
// // // // // // companies.splice(2, 1, 'ola')
// // // // // // print(companies)


// // // // // ///add amazon at the end

// // // // // let companies=['bllomberg','microsoft','uber','google','ibm','nrtflix'];
// // // // // companies.push('Amazon');

// // // // let marvel_heros=['thor','ironman','spiderman']
// // // // let dc_heros=[ , 'superman','perman','batman']
// // // // let dc= marvel_heros + dc_heros
// // // // console. (dc)

// // // let marvel_heros=['thor','ironman','spiderman']
// // // let dc_heros=['superman','perman','batman']
// // // let all_heros = marvel_heros.concat(dc_heros)
// // // console.log(all_heros[1][5])

// // // // console.log(dc_heros[Number(prompt("Enter the number: "))])
// // const another_array=[1, 2, 3, [4, 5, 6],7,[8,9]]
// // const real_array = another_array.flat(Infinity)
// // console.log(real_array)

// console.log(Array.isArray("bibek"))
// console.log(Array.from("bibek"))
