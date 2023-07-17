const express = require('express');

const app = express();

const mongoose = require('mongoose');

const Sauce = require('./models/Sauce');

const HotTakesRoutes = require('./routes/HotTakes');
const userRoutes = require('./routes/User');


app.use('/api/HotTakes', HotTakesRoutes);
app.use('/api/auth', userRoutes);


mongoose.connect('mongodb+srv://soso:Manimal@cluster0.r62xbdt.mongodb.net/',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  

  
  
  
  

module.exports = app;