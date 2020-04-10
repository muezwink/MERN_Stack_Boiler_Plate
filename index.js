// npm install express --save
const express = require('express');
const app = express();
// npm install mongoose@5.4.20 --save
const mongoose = require('mongoose');
// npm install body - parser@1.18.3 --save
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { User } = require('./models/user');
mongoose.connect('mongodb+srv://muezwink:e32SY1QlqpCHxiCR@cluster0-uq9xw.mongodb.net/test?retryWrites=true&w=majority'
                , {useNewUrlParser: true}).then(() => console.log('DB connected'))
                                          .catch(err => console.error(err)
                );

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);

    user.save((err, userData) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(4000);