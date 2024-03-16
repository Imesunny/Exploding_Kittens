const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const {connection} = require('./config/db')
const { UserModel } = require('./modules/User.model');
const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json({message: "Hey, you are on the Home Page!"})
})

app.post('/api/user', async(req, res)=>{
    try {
        const { username } = req.body;
        const user = new UserModel({ username });
        await user.save();
        res.status(201).json(user);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
})

app.get('/api/user/points', async (req, res) => {
    try {
      const { username } = req.query;
      const user = await UserModel.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user.points);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  app.put('/api/user/points', async (req, res) => {
    try {
      const { username, points } = req.body;
      let user = await UserModel.findOne({ username });
      if (!user) {
        user = new UserModel({ username, points });
      } else {
        user.points += points;
      }
      await user.save();
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  app.get('/api/leaderboard', async (req, res) => {
    try {
      const leaderboard = await UserModel.find().sort({ points: -1 }).limit(10); 
      res.json(leaderboard);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

app.listen(8080, async () => {
    try {
      await connection;
      console.log("connection established to DB");
    } catch (error) {
      console.log("Error connecting to DB", error);
    }
    console.log("Listening on port 8080");
  });
  