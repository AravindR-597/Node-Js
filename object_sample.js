//object=person
var person={name:"Aravind R",age:23,place:"Thodupuzha",display:function(){
    console.log(this.name)
}}
console.log(person['age'])
for (x in person)
{
    console.log(person[x])
}
person.age=22
console.log(person.display())

//adding property
 person.dob="31/05/1997"

 console.log(person)

 //adding method

 person.displayAge=function(){
     console.log(this.age)
 }
 console.log(person)
console.log(person.displayAge())