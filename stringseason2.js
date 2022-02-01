//  sets are the collections of the unoque elements , we can never have duplicate eelements 


//  sets looks same as object but we have to understand that diffrence in the structure  , the only way to create the set is that by using the constructed function 

// let  setexample = new Set ()

//  most importet questtion from set  is remove the duplicate elements of the array 
// let number = [1,1,1,2,2,2,3,3,3,4,4,4,5]


// let number2 = new Set(number)
// console.log(number2);


// let a = "shaik"

// let b = a.split("")
// console.log(b); 
 

let number = [1,2,3,3,3,3,4]

let set1 = new Set (number)
console.log(set1);


//  if you want to convert the set into the number then use spread operator [...]

let array1 = [...set1]
 console.log(array1);  // if you convert  a set into an array the array will not have duplicate elelments 


//  basic functions which set provides 






let a = new Set()
//  ADD function is used to add elements in the set 
console.log(a);
a.add(12)
a.add(true)
a.add("name")

console.log(a);

// has function is used to checck whether the element is present or not it its present it return as true , if not it returns as false 

//  it will always returns you bolean values 


console.log(a.has(true));

console.log(a.has("myname"));




let b = new Set("abdulul")      // it will remmove all the dublicate elements in that 

console.log(b);





// size function returns you how elements you have same as length of array 

console.log(a.size);   // "DONT USE PARENTHESIS AFFTER SIZE"


//  CLEAR function removes all the elementa from the set 

  
// console.log(a.clear())  you cant use clear in log it will returns you as undefind 

// a.clear();
// console.log(a.clear());




//  DELETE function used to delete the specific elements from the set 


a.delete(true)
console.log(a);


























































 

  