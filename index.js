/* if(22>20){
    console.log(true)
} */

//ternary opreator
//22>20 ? console.log(true) : console.log(false)
//22  >20 && console.log(true)



/* 

// Hoisting of variables

console.log(a) // will be present but undefined . Bug
console.log(b) // will throw an error . good
var a=10
let b=20
const c=30 */
/* 
// camel vs. snakecase
var this_var
var thisVar 
*/

/* console.log(undefined)
console.log(null);
console.log(false);
console.log(String)
console.log(Object)
console.log(Number("10")) */

// increasing  values
/* let a=10
a *=2
console.log(a) */

//reasigning constent variable
/* const a=10
a +=1
console.log(a) */

//escaping chracters
/* console.log("Mz name is \"Tommz\" folder")
 */

// template literals
/* const name ="Boz"
console.log("Nz name is "+ name + "!")

const age = 22
console.log(`Mz age is ${age < 50 ? 'you are too young':'you are old' }!`) */

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

const arr =['a','b', 'c']
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
console.log(cube.reduce((acc, curr) => acc + curr))