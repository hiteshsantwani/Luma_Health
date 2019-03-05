
var appointmentSchedulerService = require('../Services/appointmentSchedulerService');
 
const addNewDoctor = async (req, res) => {
    try {
        console.log(`in side addNewDoctorController`)
		await appointmentSchedulerService.addNewDoctor(req, res);
	} catch (err) {
		res.statusCode = 500;
		return res.send(err);
	}
}

const getWorkingHoursDoctor = async (req, res) => {
    try {
        console.log(`In side getWorkingHoursDoctor Controller`)
		await appointmentSchedulerService.getWorkingHoursDoctor(req, res);
	} catch (err) {
		res.statusCode = 500;
		return res.send(err);
	}
}

const bookDoctorOpening = async (req, res) => {
    try {
        console.log(`In side bookDoctorOpening Controller`)
		await appointmentSchedulerService.bookDoctorOpening(req, res);
	} catch (err) {
		res.statusCode = 500;
		return res.send(err);
	}
}

// const getWorkingHoursDoctor = async (req, res) => {
//     console.log(`Searching Doctor By Email: ${req.params.Email}`);
  
//     Doctor_Detail.find({Doctor_email : req.params.Email}, 'Availabilty', function (err, data) {
//         if (err) return console.log(err);
//         return res.json(data)
//     });
// };

// const addNewPatient = async (req, res) => {
//     let newPatient = new Patient_Detail(req.body)
//     newPatient.save((err, newPatient) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(newPatient);
//     });
// };

// const addNewAppointment = async (req, res) => {
//     let newAppointment = new Appointment_Detail(req.body)

//     newAppointment.save((err, newAppointment) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(newAppointment);
//     });
// };

// to do : As a library we are not sure if the email parameter will be in the params or in the body
// const getDoctorByEmail = async (req, res) => {
//     console.log(`Email searching: ${req.params.Email}`);
  
//     Doctor_Detail.find({Doctor_email : req.params.Email}, function (err, data) {
//         if (err) return console.log(err);
//         return res.json(data);
//     });
// };

// // to do : As a library we are not sure if the ph_no parameter will be in the params or in the body
// const getPatient = async (req, res) => {
//     console.log(`PH_no searching: ${req.params.Ph_no}`);
  
//     Patient_Detail.find({Patient_phone : req.params.Ph_no}, function (err, data) {
//         if (err) return console.log(err);
//         return res.json(data);
//     });
// };

// // to do : As a library we are not sure if the ph_no and Email parameter will be in the params or in the body
// const getAppointment = async (req, res) => {
//     console.log(`PH_no searching: ${req.params.Patient_phone}`);
  
//     Appointment_Detail.find({Patient_phone : req.params.Patient_phone}, function (err, data) {
//         if (err) return console.log(err);
//         return res.json(data);
//     });
// };


module.exports = {
    addNewDoctor,
    getWorkingHoursDoctor,
    bookDoctorOpening
}
