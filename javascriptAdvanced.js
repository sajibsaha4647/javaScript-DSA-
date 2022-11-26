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

// var addDigits = function (num) {

  

//     if (num < 10) {
//       return num;
//     } else {
//       num = [...num.toString()].reduce((a, c) => a + Number(c),0);
      
//       return addDigits(num);
//     }
//   };

//   let num = 34;

//   addDigits(num)


// var isUgly = function(n) {
//     while(n>1){
//         if(n%2==0){
//             n=n/2
//         }
//          else if(n%3==0){
//              n=n/3
//          }
//         else if(n%5==0){
//              n=n/5
//          }
//         else{
//             return false
//         }
//     }
//     if(n==1){
//         return true
//     }
//     else {
//         return false
//     } 
// };

// isUgly(6)


// var calPoints = function(ops) {
//     const stack = [];

    
//     for(var i=0; i<ops.length; i++){
        
//         switch(ops[i]){
//             case 'D': 
//             {
//                 const last = stack[stack.length - 1];
//                 stack.push(last * 2);
//                 break;
//             }
                
//             case 'C':{
//                 stack.pop();
//                 break;
//             }
                
//             case '+': {
//                 const one = stack[stack.length - 2];
//                 const two = stack[stack.length - 1];
//                 stack.push(one + two);
//                 break;
//             }
                
//             default: {
//                 stack.push(Number(ops[i]))
//                 break;
//             }
//         }

      
//     }

// return  stack.reduce((prev, cur) => prev + cur,0);
    
// };

// var ops = ["5","2","C","D","+"]

// calPoints(ops)



// var isHappy = function(n) {
//     let seen = new Set();
//  while (n !== 1) {
//    let total = 0;
//    while (0 < n) {
//      total += (n % 10) * (n % 10);
//      n = Math.floor(n / 10);
//    }
 
//    if (seen.has(total)) {

//      return false;
//    } else {
  
//      seen.add(total);
//      n = total;
//    }
//  }
//  return true;
// };


// isHappy(45)



var capitalizeTitle = function(title) {
    
    let splits = title.split(" ")

    for(let i = 0; i<splits.length;i++){
      let singleword =  splits[i].charAt(0).toUpperCase() + splits[i].slice(1)
      for(let j = 0; j<singleword.length;j++){
            
      }
    }



    let res = splits.join(" ")
    
    console.log(res)

};


capitalizeTitle("capiTalIze tHe titLe")