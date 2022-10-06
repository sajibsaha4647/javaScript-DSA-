//100 questions
//1
// let a = []
// let b = []
// //ans false & false because this was compare with memory locaton only so that its different
// console.log(a==b) //false
// console.log(a===b) //false

//2
// let c = []
// let d = c
// console.log(c==d) //true
// console.log(c===d)//true

//3
// let a = [20]
// let b = [20]
// //here a and b take memory location and there value is same sothat its both return true
// console.log(a[0] == b[0]) //true
// console.log(a[0]===b[0])//true

//4
// let z = [1,2,3,4]
// let a = {name:"sajib"}
// console.log(z) //1 2 3 4 ans

//5
// console.log(typeof NaN) //not a number

//6
// let data = 10 - (-10)
// console.log(data) //ans is 20 because of -- = + thats why

//7
// const set = new Set([1,1,1,2,3,4,4,4,5,6])
// //its removes duplicated value
// console.log(...set)//1 2 3 4 5 6

//8
// let namde = !"anil"
// console.log(!"anil")
// console.log(typeof namde) //false type is bool

//9
// console.log(!!null)//false
// console.log(!!"")//false
// console.log(!12)//true

//10
// console.log([..."sajib"])//[ 's', 'a', 'j', 'i', 'b' ]

//11
// (()=>{
// let a = b = 10
// })()
//b is by default global scope because of we did not define it in let or const so that this is globaol
// console.log(b) //return 10
// console.log(typeof a) //return undefine

//12
// console.log(!true - true) //-1
//here !true means 0 and -true means -1

// 13
// console.log(true+ +"10") //11

// 14
// let data = {name:"sajib"}
// console.log(delete data.name)//true
// console.log( data)//{}

// 15
// let data = 10
// console.log(delete data) //return false

//16
// let array = ["sajib","rony","roy"]
// let [y,x,z] = array
//de strucrture of an array
// console.log(z) //roy
// console.log(y)//sajib
// console.log(x)//rony

// 17
// let newobj = {name:"sajib",age:"45",home:"dhaka"}
// let {name,b,c} = newobj
// //destructure of an object
// console.log(name)

//18
// let newobj = {name:"sajib",age:"45",home:"dhaka"}
// let newobj2 = {name:"sajib",age1:"452",home1:"dhaka2"}
// newobj = {...newobj,...newobj2}
// console.log(newobj)
//copy all object in a existing obj
// {
//     name: 'sajib',
//     age: '45',
//     home: 'dhaka',
//     name1: 'sajib2',
//     age1: '452',
//     home1: 'dhaka2'
//   }

//19
// let data = false || {} || null
// //this data works with positive value first {} and then null and then false
//if all value are false then it takes last value
// console.log(data) //{}

// 20
// let data = false || {} || []|| true|| ''
// console.log(data) //{}

// 21
// console.log(Promise.resolve(5))
// Promise { 5 }

// 22
// console.log('\u2665'==='\u2665')

// 23
// JSON.parse() //converted JSON to a javascript value

//24
// let names = "sajib"

// getname =()=>{
//     console.log(names) //undefined error(Cannot access 'names')
//if only the global names then its will print sajib
//     let names = "saha"
// }

// getname()

//25
// const sum =(a,b,c)=>{
// return a+b+c
// }
// console.log(sum(...[1,2,3]))

//26
// let names = "this is bdtask";
// console.log(!typeof names === "object");//false
// console.log(!typeof names === "string");//false
// console.log(!typeof names);//false
// console.log(!typeof names);//false
// console.log(typeof names === "object"); //false
// console.log(typeof names === "string"); //true

//27
// let obj = { nam: "sajib" };
// Object.seal(obj);
// //fer using seal operation can not add new poperty in this object only modify is allow existing
// obj.age = 24;

// console.log(obj);

//28
// let data = [1, 2, 3, 4, 56];
// //removing first element
// data.shift();
// console.log(data);

//29
// let data = [12, 3, 4, 5, 6, 7];
// //delete last element
// data.pop();
// console.log(data);

//30
// let data = 31;
// //check odd or even numner
// console.log(data % 2);

// 31
// let data = { nam: "sajib" };
// //deleted object values
// delete data.nam;
// console.log(data);

//32
// let data = "string";
// //make this value false
// console.log(!data);

//33
//what is the difference between foreach and map
//map return always and foreach not return this is the main fact

//34
// let data = ["sajib", "saha", "rony", "rajib"];
// delete data[1];
// console.log(data);

//35
// let data = 3 ** 3; //this is squre of 3
// console.log(data);
//27

//36
// let data = 2;
// setTimeout(() => {
//   console.log(data);
// }, 0);
// data = 100;
//100

//37
// let a = "sajib";
// let b = `sajib`;
// console.log(typeof a);
// console.log(typeof b);
// console.log(a === b); //true

//38
// let a = 1;
// let b = 2;
// console.log(--b === a);
//true

// 39
// let a = 1;
// let b = 1;
// let c = 2;
// console.log((a === b) === --c);
//alreadly compare to a and b and then get true now true and --c so that its false
//false

//40
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// //3,3,3
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// //1,2,3

//41
// getage = () => {
//   age = 20;
//   console.log(age);
// };
// getage(); //20

// 42
//here needs to be define variable as let const or var
// getage2 = () => {
//   "use strict";
//   age = 20;
//   console.log(age);
// };
// getage2(); //error

//43
// const sum = eval("10*10*5");
// //convert into number
// console.log(typeof sum);
// console.log(sum);

//44
// let person = { name: "anil" };

// sayhi = (age) => {
//   return "name is " + person.name + "age is " + age;
// };

// console.log(sayhi.call(person, 21));
// console.log(sayhi.bind(person, 21));
// //return a function
// console.log(sayhi.bind(person, 21)());
// name is anilage is 21
// name is anilage is 21

//45
// sayhi = () => {
//   // return  0;//number
//   // return () => 0; //function
// };

// console.log(typeof sayhi());

//46
// let timerID = setImmediate(() => {
//   console.log("Hello, World");
// });
// console.log("Before the setImmediate call");
// setTimeout(() => {
//   console.log("Hello, World1");
// }, 0);

// console.log("After the setImmediate call");

//47
// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "one");
// });
// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, "two");
// });

// Promise.race([firstPromise, secondPromise]).then((res) => {
//   console.log(res);
// });

// 48
// console.log(3 + 4 + "6"); //76 type string
// console.log(3 + 4 + +"6"); //13 type number

// 49
// () => {
//   let x = (y = 10);
//   // let y = 12;
// };
// console.log(y);
//y is not defined
