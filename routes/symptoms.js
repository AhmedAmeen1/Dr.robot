const express = require('express');
const router = express.Router();
const Symptom = require('../models/Symptom');
const { Op } = require('sequelize');



const searchSymptoms = async (searchTerm) => {

  const symtpoms = await Symptom.findAll({
    where: {
      name: {
        [Op.like]: `%${searchTerm}%`,
      },
    }
  });

  return symtpoms;
};


router.get('/autocomplete', async (req, res) => {
  const { searchTerm } = req.query;

  if (!searchTerm) {
    return res.status(400).json({ message: 'Missing searchTerm parameter' });
  }

  const symtpoms = await searchSymptoms(searchTerm);

  return res.json(symtpoms.map((symtpom) => symtpom.name));
});



router.get('/', async (req, res) => {
  try {
    const symptoms = await Symptom.findAll();
    res.status(200).json(symptoms);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = router;