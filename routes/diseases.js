const express = require('express');
const router = express.Router();
const Disease = require('../models/Disease');


router.get('/' , async (req , res)=>{
    try {
        const symptoms = await Disease.findAll();
        res.status(200).json(symptoms);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
    });
    
module.exports = router;