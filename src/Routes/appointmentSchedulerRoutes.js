import { 
    addNewDoctor, 
    addNewPatient, 
    addNewAppointment, 
    getDoctor
} from '../controllers/appointmentSchedulerController';


const routes = (app) => {
    app.route('/AddDoctor')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, addNewDoctor)
    
    // POST endpoint
    .post(addNewDoctor);

    // app.route('/Doctor/:doctorId')
    // // get specific contact
    // .get(getDoctor);
    
    // // // put request
    // // .put(updateDoctor)

    // // // delete request
    // // .delete(deleteDoctort);
}

export default routes;
