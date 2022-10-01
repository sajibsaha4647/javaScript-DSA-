function sum(a,b){
    return a+b
}

console.log( sum (2,"5"))

//type is string "25"

console.log(typeof [])

//object

let x = 10
console.log(x++)
//10

console.log( eval("10*10+5"))
//ans 105 type number

var num = 0
var num = 6
console.log(num)
//6 this is shallow copy

let obj = {
    a:"name",
    a:"sajib"
}

console.log(obj)
//{a:"sajib"}

for(let i = 1;i<5;i++){
    if(i===3)continue
    console.log(i)
}

//ans is 124

console.log((()=>0)()) //return 0

console.log( typeof typeof 1) 
//string

let sajib = {name:"sajib",age:"45"}

for(k in sajib){
    console.log(k)
}
//name,age

let namess = ["s","d"]

for(sd of namess){
    console.log(sd,"sd")
}
//here getting index

for(sd of namess){
    console.log(sd,"sd")
}
//here getting value

console.log(true === 1)
//ans is false

let xy = [..."sjaibss"]
console.log(xy)
// [ 's', 'j', 'a','i', 'b', 's','s' ]

for(i of xy){
    console.log(i)
}
//'s', 'j', 'a','i', 'b', 's','s'

console.log(3+4+"6")
//76

let objs = {
    a:"saha",
    b:"name",
    a:"sajib"
}

console.log(objs) 
//{ a: 'sajib', b: 'name' }

console.log(+false) //0
console.log(+true) //1

getage = (...ages)=>{

    console.log(ages)
    //[21]
   for(let i = 0; i<ages.length;i++){
    console.log(ages[i])
    //21
   }
    console.log (typeof ages)
    //object

}

getage(21)


let strings = "hellow piter , how are you"

console.log(strings.substring(0,12))
//hellow piter

let data = [10,11,34]

//optimized a forloop
let len = data.length
let i = 0
for(i; i<len;i++){

}