/*
var http=require('http')

http.createServer(server).listen(4444)

function server(req,res)
{

    res.write('Aravind')
    res.end()
}
*/


//another way of calling
//------------------------
var http=require('http')
var fs=require('fs')
var u=require('url')

http.createServer(function(req,res) //callback fun
{
    var q=u.parse(req.url,true)
    console.log(q.pathname)

    if(q.pathname==="/"){ //route seting
    fs.readFile('sampleForm.html',function(err,data){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data)
    res.end()
    })
}
else if(q.pathname==='/signup'){
    fs.readFile('sampleForm.html',function(err,data){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data)
    res.end()})
}
else if(q.pathname==='/signupaction'){

    console.log(q.query)
    console.log(q.query.fname)
    res.writeHead(200,{'Content-Type':'text/html'})

    res.write('<h1>'+q.query.num+'</h1>')
    res.end()
}
else {
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write('error')
    res.end()
}
}).listen(4004,()=>console.log("server started")
)


