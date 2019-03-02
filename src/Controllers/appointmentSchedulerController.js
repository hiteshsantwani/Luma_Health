import mongoose from 'mongoose';
import { AppointmentDetailsSchema,
         DayScheduleSchema,
         AvailabilityDetailsSchema,
         ScheduleDetailsSchema,
         DoctorDetailsSchema,
         PatientDetailsSchema,
         } from '../models/appointmentSchedulerModels';


//const Contact = mongoose.model('Contact', ContactSchema);
const Doctor = mongoose.model('Doctor', DoctorDetailsSchema);
const Patient = mongoose.model('Patient', PatientDetailsSchema);
const Availability = mongoose.model('Availability', AvailabilityDetailsSchema);
const Schedule = mongoose.model('Schedule', ScheduleDetailsSchema);
const DaySchedule = mongoose.model('DaySchedule', DayScheduleSchema);
const Appointment = mongoose.model('Appointment', AppointmentDetailsSchema);

export const addNewDoctor = (req, res) => {
    let newDoctor = new Doctor(req.body);

    newDoctor.save((err, newDoctor) => {
        if (err) {
            res.send(err);
        }
        res.json(newDoctor);
    });
};

export const addNewPatient = (req, res) => {
    let newPatient = new Patient(req.body);

    newDoctor.save((err, newPatient) => {
        if (err) {
            res.send(err);
        }
        res.json(newPatient);
    });
};

export const addNewAppointment = (req, res) => {
    let newAppointment = new Appointment(req.body);

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