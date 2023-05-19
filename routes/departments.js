const express = require('express');
const router = express.Router();
const Department = require('../models/Department');
const Doctor = require('../models/doctor');
const DoctorsDep = require('../models/DoctorsDep');



// CREATE a new department
router.post('/', async (req, res) => {
  try {
    const department = await Department.create({
      name: req.body.name,
      note: req.body.note,
      description: req.body.description
    });
    res.status(201).json(department);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// READ all departments
router.get('/', async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.status(200).json(departments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// READ a single department by ID
router.get('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const department = await Department.findByPk(id);
    const doctors = await DoctorsDep.findAll({where: {departmentId: id},
       include:[
        {model: Doctor}
       ]
      })
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.status(200).json({department , doctors});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// UPDATE a department by ID
router.put('/:id', async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }
    await department.update(req.body);
    res.status(200).json(department);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE a department by ID
router.delete('/:id', async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }
    await department.destroy();
    res.status(204).json({ message: 'Department deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});




module.exports = router;