import mongoose from 'mongoose';
const util = require('util');

require('../Models/AppointmentDetailsModel');
require('../Models/AvailabiltyScheduleModel');
require('../Models/DoctorDetailsModel');
require('../Models/PatientDetailsModel');


const Doctor_Detail = mongoose.model('Doctor_Detail');
const Patient_Detail = mongoose.model('Patient_Detail');
const Appointment_Detail = mongoose.model('Appointment_Detail');
const Availabilty_Schedule = mongoose.model('Availabilty_Schedule');


export const addNewDoctor = (req, res) => {
    console.log(`Request data: ${req.body}`)

    let newDoctor = new Doctor_Detail({
        Doctor_email : req.body.Doctor_email,
        F_name : req.body.F_name,
        L_name : req.body.L_name,
        Speciality : req.body.Speciality
    });
    newDoctor.save((err, newDoctor) => {
        if (err) {
            res.send(err);
        }
        res.json(newDoctor);
    });
};

export const addNewPatient = (req, res) => {
    let newPatient = new Patient_Detail({
        Patient_phone : req.body.Patient_phone,
        F_name : req.body.F_name,
        L_name : req.body.L_name,
        Appointment_Dates : req.body.Appointment_Dates
    });

    newPatient.save((err, newPatient) => {
        if (err) {
            res.send(err);
        }
        res.json(newPatient);
    });
};

export const addNewAppointment = (req, res) => {
    let newAppointment = new Appointment_Detail({
        A_Date : req.body.A_Date,
        Doctor_email : req.body.Doctor_email,
        Patient_phone : req.body.Patient_phone
    });

    newAppointment.save((err, newAppointment) => {
        if (err) {
            res.send(err);
        }
        res.json(newAppointment);
    });
};

export const addNewAvailabiltySchedule = (req, res) => {
    let newAvailabiltySchedule = new Availabilty_Schedule({
        Date : req.body.Date,
        Doctor_email : req.body.Doctor_email,
        F_name : req.body.F_name,
        L_name : req.body.L_name,
        Timing : req.body.Timing
    });

    newAvailabiltySchedule.save((err, newAvailabiltySchedule) => {
        if (err) {
            res.send(err);
        }
        res.json(newAvailabiltySchedule);
    });
};

export const getDoctorByEmail = (req, res) => {
    console.log(`Email searching: ${req.Email}`)
    Doctor_Detail.find({Doctor_email : req.Email}, function (err, product) {
        if (err) return next(err);
        return res.json({Doctor_Detail: req.Doctor_Detail.toJSONFor()});
    })
};