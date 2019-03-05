//import mongoose from 'mongoose';
let mongoose = require('mongoose');
const util = require('util');
var moment = require('moment');

require('../Models/AppointmentDetailsModel');
require('../Models/DoctorDetailsModel');
require('../Models/PatientDetailsModel');

const Doctor_Detail = mongoose.model('Doctor_Detail');
const Patient_Detail = mongoose.model('Patient_Detail');
const Appointment_Detail = mongoose.model('Appointment_Detail');

class AppointmentSchedulerService {

    // add New Doctor 
    async addNewDoctor(req, res) {
        let newDoctor = new Doctor_Detail(req.body);
        try{
            data = newDoctor.save((err, newDoctor) => {
            if (err) {
                res.send(err);
             }
                res.json(newDoctor);
            })
        } catch (err) {
            return err;
        }
    }

    // get the working hours of the doctor 
    async getWorkingHoursDoctor(req, res) {
        try{
            Doctor_Detail.find({Doctor_email : req.params.Email},
                 'Availabilty', function (err, data) {
            if (err){
                res.json(err)
            } else{
                res.json(data)
            } 
        });
        } catch (err) {
            return err;
        }
    }

}

module.exports = new AppointmentSchedulerService();