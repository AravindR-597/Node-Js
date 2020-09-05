var dts=new Date()
console.log("Hello")
for(i=0;i<=1000;i++){
    console.log("loop")
}
console.log("end")
var dtf=new Date()
var diff=dtf-dts
console.log(diff)

//------------------------------------

//synchronus

/*function longtask(msecond)
{
    ndt=new Date()
    while((new Date()-ndt)<=msecond)
    {

    }
}

console.log("timer started")
longtask(5000)
console.log("timer ended")



console.log("timer started")
longtask(5000)
console.log("timer ended")


console.log("timer started")
longtask(5000)
console.log("timer ended")
*/
//--------------------------------------
//synchronus

function showEnd()
{
    console.log("timer ended")

}

console.log("timer started")
setTimeout(showEnd,5000)


console.log("timer started")
setTimeout(showEnd,5000)


console.log("timer started")
setTimeout(showEnd,5000)

//callback function
//-------------------------------------
var hello=function(data)
{
    console.log("Data : "+data)
}

var hai=function(callback)
{
    callback("aravind")

}

hai(hello)



