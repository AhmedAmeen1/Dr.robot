    const express  = require('express');
    const router = express.Router();
    const Doctor = require('../models/doctor');
    const Patient = require('../models/patient');
    const Prescription = require('../models/Prescription');



    // Create a new Prescription
router.post('/', async (req, res) => {
    await Prescription.create({
       Diagnosis: req.body.Diagnosis,
       Medicine: req.body.Medicine,
       Advice: req.body.Advice,
       patientId: req.body.patientId,
       doctorId: req.body.doctorId,
     })
     .then(prescription => {
       res.json(prescription);
     })
     .catch(err => {
       res.status(500).send(err);
     });
   });
   
   // Get a list of all Prescriptions
   router.get('/',async (req, res) => {
    const Prescriptions = await Prescription.findAll({
       include: [
        { model: Patient,attributes:{exclude:['password', 'address']}},
        { model: Doctor,attributes: ['name', 'specialization' , 'phoneNo' ]  }
        ]
     }).then(prescriptions =>{
      res.json(prescriptions);
     }).catch(err =>{
      res.status(500).send(err);
    })
   });
   
   // Get a specific Prescription by ID
   router.get('/:id',async (req, res) => {
    await  Prescription.findByPk(req.params.id, {
       include: [
        { model: Patient,attributes:{exclude:['password', 'address']}},
        { model: Doctor,attributes: ['name', 'specialization' , 'phoneNo' ]  }
        ]
     })
     .then(prescription => {
       if (!prescription) {
         res.status(404).send('Prescription not found');
       } else {
         res.json(prescription);
       }
     })
     .catch(err => {
       res.status(500).send(err);
     });
   });
   
   // Update an existing Prescription by ID
   router.put('/:id',async (req, res) => {
    await Prescription.findByPk(req.params.id)
     .then(prescription => {
       if (!prescription) {
         res.status(404).send('prescription not found');
       } else {
        Prescription.update({
          Diagnosis: req.body.Diagnosis,
          Medicine: req.body.Medicine,
          Advice: req.body.Advice,
          patientId: req.body.patientId,
          doctorId: req.body.doctorId,
            })
         .then(updatedprescription => {
           res.json(updatedprescription);
         })
         .catch(err => {
           res.status(500).send(err);
         });
       }
     })
     .catch(err => {
       res.status(500).send(err);
     });
   });
   
   // Delete an Prescription by ID
   router.delete('/:id',async (req, res) => {
    await Prescription.findByPk(req.params.id)
     .then(prescription => {
       if (!prescription) {
         res.status(404).send('Prescription not found');
       } else {
        Prescription.destroy()
         .then(() => {
           res.json({ message: 'Prescription deleted successfully' });
         })
         .catch(err => {
           res.status(500).send(err);
         });
       }
     })
     .catch(err => {
       res.status(500).send(err);
     });
   });
   
   module.exports = router;