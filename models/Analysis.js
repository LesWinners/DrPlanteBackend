const mongoose = require('mongoose');

const analysisSchema = new mongoose.Schema({
  image: String,
  plantName: String,
  isPlant: Boolean,
  diseaseName: String,
  confidence: Number,
  recommendedTreatments: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Analysis', analysisSchema);