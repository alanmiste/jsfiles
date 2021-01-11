/*
// if statment and console
 if(22>20){
    console.log(true)
}
*/

/*
//ternary opreator
22>20 ? console.log(true) : console.log(false)
22  >20 && console.log(true)
*/


/* 
// Hoisting of variables

console.log(a) // will be present but undefined . Bug
console.log(b) // will throw an error . good
var a=10
let b=20
const c=30 
*/


/* 
// camel vs. snakecase
var this_var
var thisVar 
*/

/* 
console.log(undefined)
console.log(null);
console.log(false);
console.log(String)
console.log(Object)
console.log(Number("10")) 
*/


/*
// increasing  values
let a=10
a *=2
console.log(a)
*/


/*
//reasigning constent variable
const a=10
a +=1
console.log(a)
*/


//escaping chracters
/* console.log("My name is \"Tommy\" folder") */


// template literals
/* const name ="Boz"
console.log("My name is "+ name + "!")
console.log(`My name is ${name}`)
const age = 22
console.log(`My age is ${age < 50 ? 'you are too young':'you are old' }!`) */

/* const str = "Hello this a Wonderful day"
console.log(str.length) //str is a child class from String
console.log(str.toUpperCase()) // build in method from String parentclass. Source of this is String.prototype.toUpperCase()
console.log(str.substring(0, str.length-4))
console.log(str.toLowerCase().replace("wonderful","Ugly")) // chaining methods and replace caeml ignorant */

//accessing array by index
/* let a = 10.05
let index = 7
const arr =['a','b', 'c']
console.log(arr[Math.floor(Math.random() *arr.length)]); // access random element with calculated index
console.log(arr[arr.length-1])  // get last element index not equal length
console.log(arr[index%arr.length]) */

/* let name=  "Fritz"


let myname = name || "Alan"
// truethy 
if(name){
    console.log(myname)
} else {
    console.log(myname)
}
 */

/* const arr =['a','b', 'c']
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element,index)
}

let index2=0
while(arr.length>index2){
    console.log("Hello world")
    index2++

}

const cube =[20,30,40,50]
const up =function(x){
    return x.toUpperCase()//explicit return
}
const up2 = x => x.toUpperCase() //implict return

console.log(up2("hello"))

const squaer = x => x*x  //implict return
console.log(cube.map(squaer))
console.log(cube.map(boxSide => boxSide + boxSide))

console.log(cube.filter(side  => side <40).map(squaer))

let total =0
console.log(cube.map(boxSide => {
    return total +=boxSide
}))
console.log(total)
console.log(cube.reduce((acc, curr) => acc + curr)) */


//switch statment
/* const cube = 31
switch (cube) {
    case 30:
        console.log("something")
        break;
    case 31:
        console.log("something")
        break;

    default:
        break;
} */

// Breack and continue a Loop
/* const array=[0,1,2,3]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element== 2){
        continue;
    }
    console.log(element)
} */


//naested Loop
// 7 4 1
// 8 5 2
// 9 6 3
/* const array=[[1,2,3],[4,5,6],[7,8,9]]

for (let index = 0; index < array.length; index++) {
    console.log("first loop",index)
    const array2= array[index] 
    for (let index2 = 0; index2 < array2.length; index2++) {
        const element = array2[index2];
        console.log("secound loop",index2)
    }
    
} */


//event loop callstack
/* console.log(1);
console.log(Date.now())
setTimeout(() => {
    console.log(2)
    console.log(Date.now())
}, 0);
console.log(3)
console.log(Date.now()) */



//function decalration
/* function up(param1,param2){
    return param1+ param2;
}
//function expresion
const up2=function(param1,param2){
    return param1+param2;
}
// arrow
const up3 =(param1, param2) => param1+param2;

const up4 =(param1, param2) => {
return param1+param2;
} */



/* console.log(globalThis)
//impure function
const arr1=[1,2,3,4,5,6]
//function reading global name space
const up4 =(param1, param2) => {
    arr1[3] = 5 //a side effect
    return param1+param2;
}
up4(2,3)
console.log(arr1) */


//closesure 
/* const up1=(p1)=>{
    let i=0;
    //console.log(this)
    const up2=(p2)=> {
        i++
        console.log(p1,p2)
        //console.log(this)
    }
    console.log(i)
    return up2(p1)
}
up1((2))
up1(5) */

//immeadiate function iife= immeadiatly invoked function exprision
// balls of dog (())()
/* ((p1)=>{
    let i=0;
    console.log(p1)
})(3) */

//pure programing
/* const arr=["up","down","right","left"]
const arr2 = arr.map(x=>x.toUpperCase())
console.log(arr2) */


//fast muting arrays with map and function
/* const arr=["up","down","right","left"]
const up =( str)=>{
    return str.toUpperCase()
}

console.log(arr.map((str) => up(str)))
 */



//moving -shifting -splicing ..... things in array
/* const arr=["up","down","right","left"]

// console.log(arr.pop())
// console.log(arr)
// console.log(arr.pop())
console.log(arr)
console.log(arr.shift())
console.log(arr)
console.log(arr.pop())
console.log(arr)
console.log(arr.push("forward"))
console.log(arr)

const arr2=["up","down","right","left"]
console.log(arr2)
const rest =arr2.splice(1,2)
console.log(arr2, rest) */

// recursive functions
/* const arr=["up","down","right","left"]
const up =( arr)=>{
    const str = arr.pop()
    console.log(arr)
    if(arr.length > 0){
       up(arr)
    }
    return str.toUpperCase()
}

console.log(up(arr)) */

//chaining
/* const str="First middle middle last"
console.log(str.split(" ").reverse()[0].toLowerCase())
console.log(str.split(" ").shift().toLowerCase())
console.log(str) */

//Object array
/* const user = [
    {
    name:"Alan",
    age: 33,
    skills: ["JS","html","css"],
    up: x=> x*x,
},
{
    name:"Magi",
    age: 22,
    skills: ["JS","design","css"],
    up: x=> x*x,
    profession:{
        name:"Magi",
        age: 22,
        skills: ["JS","design","css"],
        up: x=> x*x,
    }
}
]
//console.log(user[1].age)
//console.log(user.reduce((acc,curr)=>Number(acc)+curr.age), 0)
//console.log(obj['age'])
//console.log(obj.up(2))
console.log(Object.keys(user[0]))
console.log(Object.values(user[0]))
console.log(Object.entries(user[0]))
let a =5
let b =6
a =3
b =7 */


//classes instances methodes
/* let Rectangle = class { // blueprint
    constructor(height,width){
        console.log(this)
        this.height = height
        this.width = width
    }
    sound = () => console.log("hi")
    area = () => console.log(this.height*this.width)
}
let Box = new Rectangle (10,20)
let Box2 = new Rectangle (11,22)
console.log(Box) //Instance
console.log(Box.area()) //Instance
console.log(Box2) //Instance */


//try catch finally
/* let age = 18
try {
    if(age == 18){
        let err = new Error("Denied")
        throw(err) // throw Error to catch statment
    }
    console.log("hello")
} catch (error) {
    console.error(error) //split Error logic in own block
} finally   {
    console.log("I am always here")
} */


//command line interface arguments.
/* console.log(process.argv)

const args = process.argv.splice(2) //cut away build in arguments to let the user arguments alone
console.log(args)
let index = 0
setInterval(() => {

    if (args[1] == index) {
        process.exit() // it's like "break" in the loops
    }
    else {
        console.log(`Hi ${args[2]} The Time is: ${Date.now()}`)
    }
    index++
}, args[0]); */