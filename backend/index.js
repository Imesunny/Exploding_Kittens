const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({message: "Hey, you are on the Home Page!"})
})

app.listen(8080,()=>{
    console.log('running on port 8080');
})