import 'dotenv/config'

import { app } from "./app.js";
import { connectMongoDb } from './dbs/connectMongoDb.js';

connectMongoDb().then(()=>console.log("mongoDb connected")).catch(()=>console.error("MongoDb connection failure"))


app.get('/',(req,res)=>{
    res.send("Hi")
});

const port =process.env.PORT || 8000
app.listen(port,()=>console.log(`Server starts at ${port}`))