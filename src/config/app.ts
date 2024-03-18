import express from 'express';

const app = express()

app.get('/',(req,res)=>{
    res.send('got the data')
})

export default app;