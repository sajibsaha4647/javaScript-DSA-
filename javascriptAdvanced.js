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
console.log(true+ +"10") //11