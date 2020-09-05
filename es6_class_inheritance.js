

class sample{
    samplehello()
    {
        console.log("this is from sample class")
    }
}




class hello extends sample{
    constructor(num1,num2)
    {
        super()//this keyword has to be used to call constructor of base class
        this.num1=num1
        this.num2=num2
    }
    hellofunction(){ 
    console.log("the sum is : "+(this.num1+this.num2))
    }
    
}
let hoi=new hello(10,20)
hoi.hellofunction()
hoi.samplehello()