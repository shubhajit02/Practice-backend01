import 'dotenv/config'

import { app } from "./app.js";


app.get('/',(req,res)=>{
    res.send("Hi")
});

const port =process.env.PORT || 8000
app.listen(port,()=>console.log(`Server starts at ${port}`))