var r=require('readline-sync')

var num1=r.question("enter 2 number")
var num2=r.question("")
if(num1>num2)
{
    console.log("num1 is greater "+num1)
}
else if(num1==num2)
{
    console.log("numbers are same")
}
else
{
    console.log("num2 is greater"+num2)
}

number1="123"
number2=123
console.log(number1==number2) // only check content ==
console.log(number1===number2) // also check type and object ===