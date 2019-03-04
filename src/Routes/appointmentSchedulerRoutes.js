import { 
    addNewDoctor, 
    addNewPatient, 
    addNewAppointment, 
    getDoctorByEmail,
    getPatient,
    getAppointment,
    getWorkingHoursDoctor,
    bookDoctorOpening
} from '../controllers/appointmentSchedulerController';


const routes = (app) => {
    
// CREATE
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

    app.route('/getAppointment/:Doctor_Email/:Patient_phone')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        console.log(`Ph_no: ${req.params.Ph_no}`)
        next();
    }, getAppointment);

// API
    app.route('/getWorkingHoursDoctor/:Email')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getWorkingHoursDoctor);

    app.route('/bookWorkingHoursDoctor')
    .post((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, bookDoctorOpening);

}


export default routes;
