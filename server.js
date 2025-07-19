require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const analysisRoutes = require('./routes/analysis');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.error('Erreur MongoDB:', err));

app.use('/api/analyses', analysisRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur backend lancé sur le port ${PORT}`);
});