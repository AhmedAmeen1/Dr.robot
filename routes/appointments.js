    const express  = require('express');
    const router = express.Router();
    const Doctor = require('../models/doctor');
    const Patient = require('../models/patient');
    const Appointment = require('../models/Appointment');


  
    // Create a new appointment
router.post('/', async (req, res) => {

    await Appointment.create({
       Date: req.body.Date,
       Time: req.body.Time,
       Reason: req.body.Reason,
       Specilization: req.body.Specilization,
       patientId: req.body.patientId,
       doctorId: req.body.doctorId,
     })
     .then(appointment => {
       res.json(appointment);
     })
     .catch(err => {
       res.status(500).send(err);
     });
   });
   
   // Get a list of all appointments
   router.get('/',async (req, res) => {
    const appointments = await Appointment.findAll({
       include: [
         { model: Patient,attributes:{exclude:['password', 'address']}},
         { model: Doctor,attributes: ['name', 'specialization' , 'phoneNo' ]  }
       ]
     })
     res.json(appointments);
   });
   
   // Get a specific appointment by ID
   router.get('/:id',async (req, res) => {
    await  Appointment.findByPk(req.params.id, {
       include: [
        { model: Patient,attributes:{exclude:['password', 'address']}},
        { model: Doctor , attributes: {exclude:['password' , 'email']}}
    ]
     })
     .then(appointment => {
       if (!appointment) {
         res.status(404).send('Appointment not found');
       } else {
         res.json(appointment);
       }
     })
     .catch(err => {
       res.status(500).send(err);
     });
   });
   
   // Update an existing appointment by ID
   router.put('/:id',async (req, res) => {
    await Appointment.findByPk(req.params.id)
     .then(appointment => {
       if (!appointment) {
         res.status(404).send('Appointment not found');
       } else  {
        Appointment.update({
           date: req.body.Date,
           time: req.body.Time,
           reason: req.body.Reason,
           Specilization: req.body.Specilization,
           patientId: req.body.patientId,
           doctorId: req.body.doctorId
         })
         .then(updatedAppointment => {
           res.json(updatedAppointment);
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
   
   // Delete an appointment by ID
   router.delete('/:id',async (req, res) => {
    await Appointment.findByPk(req.params.id)
     .then(appointment => {
       if (!appointment) {
         res.status(404).send('Appointment not found');
       } else {
        Appointment.destroy()
         .then(() => {
           res.json({ message: 'Appointment deleted successfully' });
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