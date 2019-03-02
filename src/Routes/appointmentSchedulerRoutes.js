import { 
    addNewDoctor, 
    addNewPatient, 
    addNewAppointment, 
    addNewAvailabiltySchedule
} from '../controllers/appointmentSchedulerController';


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
    // app.route('/Doctor/:doctorId')
    // // get specific contact
    // .get(getDoctor);s
    
    // // // put request
    // // .put(updateDoctor)

    // // // delete request
    // // .delete(deleteDoctort);
}

export default routes;
