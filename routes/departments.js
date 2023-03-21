const express = require('express');
const router = express.Router();
const Department = require('../models/Department');
const Doctor = require('../models/doctor');


router.get('/' , async (req,res)=>{
    const department = await Department.findAll({
        include: Doctor
    });
    res.json(department);
});

router.post('/' , async(req,res)=>{try {
    const newdepartment = await Department.create({
        name: req.body.name,
        phoneNo: req.body.phoneNo,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password,
    
    })
    res.json(newdepartment)
} catch (error) {
    console.log(error);
    res.json(`error:${error}`)
}

});


router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedDep = await Department.destroy({ where: { id } });
      if (deletedDep) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ message: 'Department not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name, note, description } = req.body;
      const [updatedRows] = await Department.update({ name, note, description }, { where: { id } });
      if (updatedRows) {
        const updatedUser = await Department.findByPk(id);
        res.json(updatedUser);
      } else {
        res.status(404).json({ message: 'department not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });


module.exports = router;