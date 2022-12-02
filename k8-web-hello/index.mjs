import express from "express";
import os from 'os';

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const helloMsg = `Version 2: hello from ${os.hostname()}`
    res.send(helloMsg);
})

app.listen(port, () => {
    console.log(`server is running`)
})