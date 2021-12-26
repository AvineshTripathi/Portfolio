const express = require("express");
const axios = require("axios");



const app = express();
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening to port ${process.env.PORT}`))

app.get('/express', (req,res) => {
    res.send({express: 'Your express backend is connected now'});
    console.log(req)
});