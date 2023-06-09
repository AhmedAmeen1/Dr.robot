const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');
const Patient = require('../models/patient');
const Appointment = require('../models/Appointment');
const Prescription = require('../models/Prescription')
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.findAll({
      include: [{ model: Doctor, attributes: ['name', 'specialization', 'phoneNo'] }]
    });
    res.json(patients);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.post('/signup' , async(req,res)=>{try {
    const newpatient = await Patient.create({
        fname: req.body.fname,
        lname: req.body.lname,
        phoneNo: req.body.phoneNo,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password,
        nationalnumber: req.body.nationalnumber,
        address: req.body.address,
        medicalHistory: req.body.medicalHistory,
        bloodType: req.body.bloodType,
        BloodPressure: req.body.BloodPressure,
        Diabetes: req.body.Diabetes,
        Allergic: req.body.Allergic,
        Surgery: req.body.Surgery,
        Cancer: req.body.Cancer,
        Pregnant: req.body.Pregnant,
        Smoker: req.body.Smoker,
        temperature: req.body.temperature,
    
    
    })
    res.json("registration successful")
} catch (error) {
    console.error(error);
    res.status(401).json(`error:${error}`)
}

});


router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedpatient = await Patient.destroy({ where: { id } });
      if (deletedpatient) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ message: 'patient not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

// Update a patient record
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    fname,
    lname,
    phoneNo,
    age,
    gender,
    email,
    password,
    nationalnumber,
    address,
    medicalHistory,
    bloodType,
    BloodPressure,
    Diabetes,
    Allergic,
    Surgery,
    Cancer,
    Pregnant,
    Smoker,
    temperature,
    X_Ray_done,
    Analysis_done,
    Medicine_done,
    Serum_done,
    Reviewed_devices,
  } = req.body;

  try {
    // Find the patient record by ID
    const patient = await Patient.findByPk(id);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    // Update the patient record with new values
    await patient.update({
      fname,
      lname,
      phoneNo,
      age,
      gender,
      email,
      password,
      nationalnumber,
      address,
      medicalHistory,
      bloodType,
      BloodPressure,
      Diabetes,
      Allergic,
      Surgery,
      Cancer,
      Pregnant,
      Smoker,
      temperature,
      X_Ray_done,
      Analysis_done,
      Medicine_done,
      Serum_done,
      Reviewed_devices,
    });

    return res.json(patient);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


  router.get('/:id/appointments', async (req, res) => {
   await Appointment.findAll({
      where: {
        patientId: req.params.id
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



router.get('/:id/prescriptions', async (req,res)=>{
  const patientId = req.params.id;
  const patient = await Patient.findByPk(patientId);
  const PatientPrescription = await Prescription.findAll({where:{patientId:req.params.id},
    include:[{ model: Patient,attributes:{exclude:['password', 'address']}}]
  });
  res.status(200).json(PatientPrescription);
})



  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    const user = await Patient.findOne({ where: { email } });
  
    if (!user) {
      return res.status(401).json('Invalid username');
    }
  
    if (user.password !== password) {
      return res.status(401).json('Invalid password');
    }
  
    res.json(user.id);
  });


module.exports = router;

