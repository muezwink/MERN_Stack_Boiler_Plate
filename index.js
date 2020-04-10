// npm install express --save
const express = require('express');
const app = express();
//npm install mongoose@5.4.20 --save
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://muezwink:e32SY1QlqpCHxiCR@cluster0-uq9xw.mongodb.net/test?retryWrites=true&w=majority'
                , {useNewUrlParser: true}).then(() => console.log('DB connected'))
                                          .catch(err => console.error(err)
                );
// app.get('/', function(req, res) {
app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(6000);

// sudo node index.js 로 싫행해야함.