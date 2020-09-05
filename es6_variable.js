
var num=10
var num=30
console.log(num)

//here the 2nd num variable replaces the first num
//so for avoiding that we use LET

//let num1=20
//var num1=30

function hello()
{
    var i=0
    if(i===0)
    {
        var hey=20
        let hoi=30
        //the scope of let variable is not through out the function but only in the block "here if block"
        console.log(hoi)
    }
   // console.log(hoi)// this won't work
    console.log(hey)
}

hello()
const value=100

const person=["aravind","anjaly"]

console.log(person)

person.push("sreelatha")

console.log(person)