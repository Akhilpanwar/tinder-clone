import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from 'cors'; 

//app config
const app = express();
const port = process.env.PORT || 8000
const connection_url = 'mongodb+srv://admin:cnjN17NB3PWhPv9f@cluster0.v2nnvvu.mongodb.net/?retryWrites=true&w=majority'
//Middlewares
app.use(express.json());
app.use(Cors());
//DB config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    //useCreateIndex:true,
    //useUnifiedTopology:true,
  //  useFindAndModify:false,
});

//API EndPoints
//app.get("/", (req, res) => res.status(200).send("hello world!!"));
app.post("/tinder/cards", (req,res)=>{
    const dbCard=req.body;

Cards.create(dbCard,(err,data)=>{
    if(err){
        res.status(500).send(err)
    }else{
        res.status(201).send(data)
    }
}
);
});
app.get("/tinder/cards", (req,res)=>{
    const dbCard=req.body;

Cards.find((err,data)=>{
    if(err){
        res.status(500).send(err)
    }else{
        res.status(200).send(data)
    }
}
);
});
//listner
app.listen(port, () => console.log(`listning on loclahost:${port}`))