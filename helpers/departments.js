const Department = require('../models/Department');

async function addDepartments(departments) {
  try {
    const createdDepartments = await Department.bulkCreate(departments);
    return createdDepartments;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to add departments');
  }
};

const departments = [
    {
         name: 'التوليد والنساء (Obstetrics and Gynecology)',
         note: 'حيث يتم رعاية النساء الحوامل وتقديم الرعاية الصحية للنساء',
         description: 'Description 1' 
    },
    {
        name: 'طب العيون (Ophthalmology)',
        note: ' حيث يتم تشخيص وعلاج الأمراض المتعلقة بالعينين',
        description: 'Description ' 
   },
   {
        name: 'طب الأذن والأنف والحنجرة',
        note: ' حيث يتم تشخيص وعلاج الأمراض المتعلقة بالأذن والأنف والحنجرة',
        description: 'Description 3' 
    },
    {
        name: 'الأمراض العصبية (Neurology)',
        note: 'حيث يتم تشخيص وعلاج الأمراض المتعلقة بالجهاز العصبي',
        description: 'Description 4' 
   },

];
  const addedDepartments = addDepartments(departments);
  console.log(addedDepartments);

module.exports = addDepartments;