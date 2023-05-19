const express = require('express');
const router = express.Router();
const Nurse = require('../models/nurse');
const Patient = require('../models/patient');
const Appointment = require('../models/Appointment');



router.get('/' , async (req,res)=>{
    const nurses = await Nurse.findAll();
    res.json(nurses);
});



router.get('/appointments' , async (req,res)=>{
  const nurses = await Appointment.findAll({where: {Type: "online"}});
  res.json(nurses);
});


router.post('/signup' , async(req,res)=>{try {
    const newnurse = await Nurse.create({
        name: req.body.name,
        phoneNo: req.body.phoneNo,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password,
    })
    res.json(newnurse)
} catch (error) {
    console.log(error);
    res.json(`error:${error}`)
}

});


router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedNurse = await Nurse.destroy({ where: { id } });
      if (deletedNurse) {
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
      const [updatedRows] = await Nurse.update({ name, email, password, phoneNo, gender,age }, { where: { id } });
      if (updatedRows) {
        const updatedUser = await Nurse.findByPk(id);
        res.json(updatedUser);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });



  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    const nurse = await Nurse.findOne({ where: { email } });
  
    if (!nurse) {
      return res.status(401).json('Invalid username');
    }
  
    if (nurse.password !== password) {
      return res.status(401).json('Invalid password');
    }
  
    res.json(`Logged in successfully , your id is ${nurse.id}`);
  });
module.exports = router;

