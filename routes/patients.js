const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');
const Patient = require('../models/patient');

router.get('/' , async (req,res)=>{
    const patients = await Patient.findAll({
        include: Doctor
    });
    res.json(patients);
});

router.post('/' , async(req,res)=>{try {
    const newpatient = await Patient.create({
        name: req.body.name,
        phoneNo: req.body.phoneNo,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password,
        nationalnumber: req.body.nationalnumber,
        address: req.body.address
    
    })
    res.json(newpatient)
} catch (error) {
    console.log(error);
    res.json(`error:${error}`)
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

  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, password, phoneNo, gender,age, nationalnumber, address } = req.body;
      const [updatedRows] = await Patient.update({ name, email, password, phoneNo, gender,age, nationalnumber, address }, { where: { id } });
      if (updatedRows) {
        const updatedUser = await Patient.findByPk(id);
        res.json(updatedUser);
      } else {
        res.status(404).json({ message: 'patient not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
    router.get('/login', (req,res)=>{
    res.send('Please your Email and password')
  });

  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    const user = await Patient.findOne({ where: { email } });
  
    if (!user) {
      return res.status(401).send('Invalid username');
    }
  
    if (user.password !== password) {
      return res.status(401).send('Invalid password');
    }
  
    res.send('Logged in successfully');
  });


module.exports = router;

