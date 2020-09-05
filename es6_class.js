class hello{
    constructor(num1,num2)
    {
        this.num1=num1
        this.num2=num2
    }
    hellofunction(){ //no fun keyword needed
    console.log("the sum is : "+(this.num1+this.num2))
    }
    
}
let hoi=new hello(10,20)
hoi.hellofunction()

