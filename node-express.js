const exp=require('express')
const path=require('path')

const app=exp()

app.use(function (req,res,next){

    console.log("app.use")
    next()
})

app.get('/',(req,res)=>{
    res.send("Aravind")
})

app.get('/index',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"sampleForm.html"))
    console.log("middle")
    next()
})


app.post('/index',(req,res)=>res.send("Account submitted"))


app.get('/about',(req,res)=>res.send("About"))






app.listen(1000,()=>{console.log('Server Started')})