const express = require('express');
const router = express.Router();
const Analysis = require('../models/Analysis');

// Enregistrer une nouvelle analyse
router.post('/', async (req, res) => {
  try {
    const analysis = new Analysis(req.body);
    await analysis.save();
    res.status(201).json(analysis);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Récupérer toutes les analyses (pour l'historique)
router.get('/', async (req, res) => {
  try {
    const analyses = await Analysis.find().sort({ timestamp: -1 });
    res.json(analyses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Nombre d'analyses
router.get('/count', async (req, res) => {
  try {
    const count = await Analysis.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Statistiques personnalisées (exemple)
router.get('/stats', async (req, res) => {
  try {
    // À adapter selon tes besoins
    const total = await Analysis.countDocuments();
    const last = await Analysis.findOne().sort({ timestamp: -1 });
    res.json({ total, last });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;