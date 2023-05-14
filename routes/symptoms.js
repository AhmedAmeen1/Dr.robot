const express = require('express');
const router = express.Router();
const Symptom = require('../models/Symptom');


router.get('/' , async (req , res)=>{
    try {
        const symptoms = await Symptom.findAll();
        res.status(200).json(symptoms);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
    });
    
module.exports = router;