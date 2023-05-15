const express = require('express');
require('dotenv').config();
const {sequelize,connectToDb} = require('./db');
const body_parser = require('body-parser');
const DoctorRoutes = require('./routes/doctors');
const PatientsRoutes = require('./routes/patients');
const DepartmentsRoutes = require('./routes/departments');
const DiseasesRoutes = require('./routes/diseases');
const AppointmentRoutes = require('./routes/appointments');
const PrescriptionRoutes = require('./routes/prescriptions');
const SymptomRoutes = require('./routes/symptoms');
const NurseRoutes = require('./routes/symptoms');
const Department = require('./models/Department');
const Disease = require('./models/Disease');
const Doctor = require('./models/doctor');
const Patient = require('./models/patient');
const Nurse = require('./models/nurse');
const PatientDis = require('./models/PatientDis');
const Appointment = require('./models/Appointment');
const Symptom = require('./models/Symptom');
const DoctorsDep = require('./models/DoctorsDep');
const Patientnurse = require('./models/Patientnurse');
const Prescription = require('./models/Prescription');
const compression = require('compression')
const cors = require('cors')

const port =  3000 || process.env.PORT;


const app = express();
app.use(cors());
app.use(express.json());
app.use(compression());



app.use('/api/doctors',DoctorRoutes);
app.use('/api/patients',PatientsRoutes);
app.use('/api/Departments',DepartmentsRoutes);
app.use('/api/diseases',DiseasesRoutes);
app.use('/api/appointments', AppointmentRoutes);
app.use('/api/prescription', PrescriptionRoutes);
app.use('/api/symptoms', SymptomRoutes);
app.use('/api/nurses', NurseRoutes);



Doctor.hasOne(Department, {through: DoctorsDep});
Department.belongsToMany(Doctor, {through: DoctorsDep});
Patient.belongsToMany(Doctor, {through: Appointment});
Doctor.belongsToMany(Patient, {through: Appointment});
Patient.belongsToMany(Disease, {through: PatientDis});
Disease.belongsToMany(Patient, {through: PatientDis});
Appointment.belongsTo(Patient);
Appointment.belongsTo(Doctor);
Prescription.belongsTo(Patient);
Prescription.belongsTo(Doctor);
DoctorsDep.belongsTo(Doctor);
Patient.belongsToMany(Nurse, {through: Patientnurse});
Nurse.belongsToMany(Patient, {through: Patientnurse});







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
app.listen(port , async ()=>{
    await console.log(`Server is running at http://localhost:${port}`);
    await connectToDb();
});

