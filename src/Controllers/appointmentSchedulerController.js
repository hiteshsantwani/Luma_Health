import mongoose from 'mongoose';
const util = require('util');

import { AppointmentDetailsSchema,
         AvailabiltySchedule,
         DoctorDetailsSchema,
         PatientDetailsSchema,
         } from '../models/appointmentSchedulerModels';


//const Contact = mongoose.model('Contact', ContactSchema);

const Doctor_Detail = mongoose.model('Doctor_Detail', DoctorDetailsSchema);
const Patient_Detail = mongoose.model('Patient_Detail', PatientDetailsSchema);
const Appointment_Detail = mongoose.model('Appointment_Detail', AppointmentDetailsSchema);


export const getDoctor= (req, res) => {
    Doctor.find({}, (err, Doctor) => {
        if (err) {
            res.send(err);
        }
        res.json(Doctor_Detail);
    });
};

export const addNewDoctor = (req, res) => {
    console.log('inside addNewDoctor')
    console.log("request: "+JSON.stringify(req));


    let newDoctor = new Doctor_Detail({

    });
    newDoctor.save((err, newDoctor) => {
        if (err) {
            res.send(err);
        }
        res.json(newDoctor);
    });
};

export const addNewPatient = (req, res) => {
    let newPatient = new Patient_Detail(req.body);

    newDoctor.save((err, newPatient) => {
        if (err) {
            res.send(err);
        }
        res.json(newPatient);
    });
};

export const addNewAppointment = (req, res) => {
    let newAppointment = new Appointment_Detail(req.body);

    newAppointment.save((err, newAppointment) => {
        if (err) {
            res.send(err);
        }
        res.json(newAppointment);
    });
};


// export const addNewContact = (req, res) => {
//     let newContact = new Contact(req.body);

//     newContact.save((err, contact) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(contact);
//     });
// };

// export const getContacts = (req, res) => {
//     Contact.find({}, (err, contact) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(contact);
//     });
// };

// export const getContactWithID = (req, res) => {
//     Contact.findById(req.params.contactId, (err, contact) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(contact);
//     });
// }

// export const updateContact = (req, res) => {
//     Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true }, (err, contact) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(contact);
//     })
// }

// export const deleteContact = (req, res) => {
//     Contact.remove({ _id: req.params.contactId }, (err, contact) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json({ message: 'Successfully deleted contact'});
//     })
// }
