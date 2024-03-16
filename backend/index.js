const express = require('express');
const mongoose = require('mongoose');
const { UserModel } = require('./modules/User.model');
const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json({message: "Hey, you are on the Home Page!"})
})

app.post('/api/user', async(req, res)=>{
    const{username} = req.body;
    const user = new UserModel({
        username, 
        points: 0
    })
    await user.save();
    res.send('User points initialized successfully')
})

app.listen(8080,()=>{
    console.log('running on port 8080');
})