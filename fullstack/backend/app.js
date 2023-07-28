const express = require('express');
const path = require('path');


const mongoose = require('mongoose');

const app = express();


const HotTakesRoutes = require('./routes/HotTakes');
const userRoutes = require('./routes/User');





 mongoose.connect('mongodb+srv://soso:Manimal@cluster0.r62xbdt.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
  app.use(express.json());

app.use('/api/HotTakes', HotTakesRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

  
  
  

module.exports = app;
