const express = require("express");
const res = require("express/lib/response");
const app = express();


//adding two number
const addTwoNumber= (n1,n2) => {
    return n1+n2;
}

//addTwoNumber endpoint
app.get("/addTwoNumber", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.json({statuscocde:200, data: result }); 
});

// "/"
app.get("/", (req, res) => {
    const n1 = "<html><body><H1>HELLO THERE HOME</H1></body></html>";
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(n1));     
})

//listening port message

const port=3000;
app.listen(port,()=> {
    console.log("hello i'm listening to port "+port);
})