function person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("Name: "+this.name,"Age: "+this.age,"Place: "+this.place)
    }
}
Aravind=new person("Aravind",23,"thodupuzha")
Anjaly=new person("Anjaly",20,"edavetty")
Aravind.display()
Anjaly.display()
