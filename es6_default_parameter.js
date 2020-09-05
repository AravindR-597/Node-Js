function hello(num1=100,num2){ //here 100 is default value of num1
    //here if we do not provide value to num1 it will take 100 as its default value to calculate(only if num1=null or undefined)
    console.log(num1+num2)

}

hello(10,20)