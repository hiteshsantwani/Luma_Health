const controller = require('../Controllers/appointmentSchedulerController');
const express = require('express');
const router = express.Router();


router.get('/getDoctorByEmail/:Email', function (req, res, next) {
    // middleware
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    next();
  },controller.getDoctorByEmail);


router.get('/getWorkingHoursDoctor/:Email', function (req, res, next) {
    // middleware
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    next();
  },controller.getWorkingHoursDoctor);

// const routes = (app) => {

// // CREATE
//     app.route('/AddDoctor')
//     .post((req, res, next) => {
//         // middleware
//         console.log(`Request from: ${req.originalUrl}`)
//         console.log(`Request type: ${req.method}`)
//         next();
//     }, controller.addNewDoctor)
    
//     app.route('/AddPatient')
//     .post((req, res, next) => {
//         // middleware
//         console.log(`Request from: ${req.originalUrl}`)
//         console.log(`Request type: ${req.method}`)
//         next();
//     }, controller.addNewPatient)

//     app.route('/AddAppointment')
//     .post((req, res, next) => {
//         // middleware
//         console.log(`Request from: ${req.originalUrl}`)
//         console.log(`Request type: ${req.method}`)
//         next();
//     }, controller.addNewAppointment)


// // READ
//     app.route('/getDoctorByEmail/:Email')
//     .get((req, res, next) => {
//         // middleware
//         console.log(`Request from: ${req.originalUrl}`)
//         console.log(`Request type: ${req.method}`)
//         console.log(`Email: ${req.params.Email}`)
//         next();
//     }, controller.getDoctorByEmail);
    
//     app.route('/getPatient/:Ph_no')
//     .get((req, res, next) => {
//         // middleware
//         console.log(`Request from: ${req.originalUrl}`)
//         console.log(`Request type: ${req.method}`)
//         console.log(`Ph_no: ${req.params.Ph_no}`)
//         next();
//     }, controller.getPatient);

//     app.route('/getAppointment/:Doctor_Email/:Patient_phone')
//     .get((req, res, next) => {
//         // middleware
//         console.log(`Request from: ${req.originalUrl}`)
//         console.log(`Request type: ${req.method}`)
//         console.log(`Ph_no: ${req.params.Ph_no}`)
//         next();
//     }, controller.getAppointment);

// // API
//     app.route('/getWorkingHoursDoctor/:Email')
//     .get((req, res, next) => {
//         // middleware
//         console.log(`Request from: ${req.originalUrl}`)
//         console.log(`Request type: ${req.method}`)
//         next();
//     }, controller.getWorkingHoursDoctor);

//     app.route('/bookWorkingHoursDoctor')
//     .post((req, res, next) => {
//         // middleware
//         console.log(`Request from: ${req.originalUrl}`)
//         console.log(`Request type: ${req.method}`)
//         next();
//     }, controller.bookDoctorOpening);

// }
// export default routes;
module.exports = router;