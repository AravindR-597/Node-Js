//print even numbers

for(i=0;i<=100;i=i+1)
{
    if(i%2===0)
    {
        console.log(i)
    }
}
var r=require('readline-sync')
row=r.question("Enter the number of rows ")

for(i=1;i<=row;i+1)
{
    for(j=1;j<=i;j+1)
    {
    console.log("*")
    }
    console.log("\n")
}