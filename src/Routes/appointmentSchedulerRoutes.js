import { 
    addNewDoctor, 
    addNewPatient, 
    addNewAppointment, 
    addNewAvailabiltySchedule,
    getDoctorByEmail,
    getPatient
} from '../controllers/appointmentSchedulerController';

// CREATE
const routes = (app) => {
 
    app.route('/AddDoctor')
    .post((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, addNewDoctor)
    
    app.route('/AddPatient')
    .post((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, addNewPatient)

    app.route('/AddAppointment')
    .post((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, addNewAppointment)

    app.route('/AddAvailability')
    .post((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, addNewAvailabiltySchedule)

// READ
    app.route('/getDoctorByEmail/:Email')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        console.log(`Email: ${req.params.Email}`)
        next();
    }, getDoctorByEmail);
    
    app.route('/getPatient/:Ph_no')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        console.log(`Ph_no: ${req.params.Ph_no}`)
        next();
    }, getPatient);
}

export default routes;
