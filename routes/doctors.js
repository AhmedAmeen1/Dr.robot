const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');
const Patient = require('../models/patient');
const Appointment = require('../models/Appointment');



router.get('/' , async (req,res)=>{
    const doctors = await Doctor.findAll({
        include: [{model:Patient, attributes:{exclude:['password', 'address']}}]
    });
    res.json(doctors);
});

router.post('/signup' , async(req,res)=>{try {
    const newdoctor = await Doctor.create({
        name: req.body.name,
        phoneNo: req.body.phoneNo,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password,
        specialization: req.body.specialization,
    })
    res.json(newdoctor)
} catch (error) {
    console.log(error);
    res.json(`error:${error}`)
}

});


router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedDoctor = await Doctor.destroy({ where: { id } });
      if (deletedDoctor) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ message: 'Doctor not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, password, phoneNo, gender,age } = req.body;
      const [updatedRows] = await Doctor.update({ name, email, password, phoneNo, gender,age }, { where: { id } });
      if (updatedRows) {
        const updatedUser = await Doctor.findByPk(id);
        res.json(updatedUser);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });


  router.get('/:id/appointments', (req, res) => {
    Appointment.findAll({
      where: {
        doctorId: req.params.id
      },
      include: [
        { model: Patient,attributes:{exclude:['password', 'address']}},
        { model: Doctor,attributes: ['name', 'specialization' , 'phoneNo' ]  }
      ]
    })
    .then(appointments => {
      res.json(appointments);
    })
    .catch(err => {
      res.status(500).send(err);
    });
  });

  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    const doctor = await Doctor.findOne({ where: { email } });
  
    if (!doctor) {
      return res.status(401).json('Invalid username');
    }
  
    if (doctor.password !== password) {
      return res.status(401).json('Invalid password');
    }
  
    res.json(doctor.id);
  });
module.exports = router;

