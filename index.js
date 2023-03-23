const express = require('express');
const apiRoutes = require('./routes');
const {sequelize,connectToDb} = require('./db');
const body_parser = require('body-parser');
const DoctorRoutes = require('./routes/doctors');
const PatientsRoutes = require('./routes/patients');
const DepartmentsRoutes = require('./routes/departments');
const DiseasesRoutes = require('./routes/diseases');
const Department = require('./models/Department');
const Disease = require('./models/Disease');
const Doctor = require('./models/doctor');
const Patient = require('./models/patient');
const PatientDis = require('./models/PatientDis');
const DocPatient = require('./models/DocPatient');
const DoctorsDep = require('./models/DoctorsDep');
const compression = require('compression')
const cors = require('cors')




const app = express();
app.use(cors());
app.use(express.json());
app.use(compression());
const PORT = 3000;

app.use('/api/doctors',DoctorRoutes);
app.use('/api/patients',PatientsRoutes);
app.use('/api/Departments',DepartmentsRoutes);
app.use('/api/diseases',DiseasesRoutes);

Doctor.hasOne(Department, {through: DoctorsDep});
Department.belongsToMany(Doctor, {through: DoctorsDep});
Patient.belongsToMany(Doctor, {through: DocPatient});
Doctor.belongsToMany(Patient, {through: DocPatient});
Patient.belongsToMany(Disease, {through: PatientDis});
Disease.belongsToMany(Patient, {through: PatientDis});


app.get('/',(request,response)=>{
    response.status(200).json({message:"Hello World"})
});


app.use((request,response)=>{
    response.status(404);
    response.json({message:"Resource not found"});
})


app.use((request,response)=>{
    response.status(500);
    response.json({message:"Oops... Something went wrong"});
})


sequelize.sync();
app.listen(PORT , async ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    await connectToDb();
});
