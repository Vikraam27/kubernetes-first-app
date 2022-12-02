import express from "express";
import fetch from "node-fetch";
import os from 'os';

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const helloMsg = `Version 2: hello from ${os.hostname()},`
    res.send(helloMsg);
})

app.get('/nginx', async(req, res) => {
    const url = 'http://nginx'
    const response = await fetch(url);
    const body = await response.text();
    res.send(body)
})


app.listen(port, () => {
    console.log(`server is running`)
})