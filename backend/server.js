import express, { json } from "express";

const app=express();
const port=30300;
app.use(json());

// app.use(cors());

app.get("/",(req,res)=>{
    return res.json({'message': 'This is root api','from ': req.ip}).status(300);
});

app.listen(port,()=>console.log(`server running on ${port}`));