

//  STRINGS 

let course = "full stack web development course "

console.log(course.length);


//  concatination of strings adding of strings 
let user = "shaik abdul razzak"

let age = "21"


 let newstr =user.concat(age)

 console.log(newstr);

console.log(user + age);


// accessing the indiviual elements of strings are same that as the arrays 


console.log(user[4]);   // this will  return you the character which is exactelly that index  

console.log(user.indexOf("a"));  // indexOF returns you the index of that character at first occurence   use  CIRCULAR  PARANTHESIS



//  REVERSE OF STRING IS ONE OF THE IMPORTENT QUESTION OF THE INTERVIEW 
//  JUST TO REVERSE A STRING WE HAVE TO PERRFORM 3 OPERATIONS 

//  SPLIT   CONVERTS YOU STRING INTO AN ARRAY 


let name1 = "sahikabdulrazzzak"
 let name2 = name1.split("a")   // inside the split function what ever the value you have given ,  the new array will come based on that value and the value get removed 

console.log(name2);


let name = "mirza arsalan baig"

console.log(name);

let namearray = name.split(" ")

console.log(namearray);

//  reverse ussed to reverse the array 



let namearrayreverse = namearray.reverse()

console.log(namearrayreverse);


//  join used to convert the array into a string 

let reversename = namearrayreverse.join(" ")
console.log(reversename);



//  REPLACE is used to  replace something in the string . it will take 2 parameters first is what you want to remove  , secound what you want to replace     replace(" ")



let mydi = "mirza asad bhag"

console.log(mydi.replace("asad","asadullah"));

//  trim is used to remove all the unnessary space from the string , it will only remove the space from the start and end , it wont remove the space in the middle 


let javascript = "    java    script      " 
console.log(javascript.trim());


























































// let name = "arsalan"
// const splitsrc = name.split("")


// reverse all the variables present inside 
// full stack develpment course 

// let cor = "full stack develpment course"
// const splitsrc= cor.split(" ")
// console.log(splitsrc);


// const reversearray = splitsrc.reverse()
// console.log(reversearray);


// const scroutput = reversearray.join()
// console.log(scroutput);


// replace 

// const   ars = "abdul is working as a developer"
// console.log(ars);
// console.log(ars.replace("abdul","shaik"));


// const   arn  = "            i am abdul      "
// console.log(arn);
// console.log(arn.trim());