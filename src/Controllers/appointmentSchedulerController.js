import mongoose from 'mongoose';
const util = require('util');
var moment = require('moment');

require('../Models/AppointmentDetailsModel');
require('../Models/DoctorDetailsModel');
require('../Models/PatientDetailsModel');


const Doctor_Detail = mongoose.model('Doctor_Detail');
const Patient_Detail = mongoose.model('Patient_Detail');
const Appointment_Detail = mongoose.model('Appointment_Detail');
 

export const addNewDoctor = (req, res) => {
    console.log(`Request data: ${req.body}`)

    let newDoctor = new Doctor_Detail(req.body)

    newDoctor.save((err, newDoctor) => {
        if (err) {
            res.send(err);
        }
        res.json(newDoctor);
    });
};

export const addNewPatient = (req, res) => {
    let newPatient = new Patient_Detail(req.body)
    newPatient.save((err, newPatient) => {
        if (err) {
            res.send(err);
        }
        res.json(newPatient);
    });
};

export const addNewAppointment = (req, res) => {
    let newAppointment = new Appointment_Detail(req.body)

    newAppointment.save((err, newAppointment) => {
        if (err) {
            res.send(err);
        }
        res.json(newAppointment);
    });
};

// to do : As a library we are not sure if the email parameter will be in the params or in the body
export const getDoctorByEmail = (req, res) => {
    console.log(`Email searching: ${req.params.Email}`);
  
    Doctor_Detail.find({Doctor_email : req.params.Email}, function (err, data) {
        if (err) return console.log(err);
        return res.json(data);
    });
};

// to do : As a library we are not sure if the ph_no parameter will be in the params or in the body
export const getPatient = (req, res) => {
    console.log(`PH_no searching: ${req.params.Ph_no}`);
  
    Patient_Detail.find({Patient_phone : req.params.Ph_no}, function (err, data) {
        if (err) return console.log(err);
        return res.json(data);
    });
};

// to do : As a library we are not sure if the ph_no and Email parameter will be in the params or in the body
export const getAppointment = (req, res) => {
    console.log(`PH_no searching: ${req.params.Patient_phone}`);
  
    Appointment_Detail.find({Patient_phone : req.params.Patient_phone}, function (err, data) {
        if (err) return console.log(err);
        return res.json(data);
    });
};

export const getWorkingHoursDoctor = (req, res) => {
    console.log(`Searching Doctor By Email: ${req.params.Email}`);
  
    Doctor_Detail.find({Doctor_email : req.params.Email}, 'Availabilty', function (err, data) {
        if (err) return console.log(err);
        
        return res.json(data)
    });
};

export const bookDoctorOpening = (req, res) => {
    console.log(`Email searching: ${req.body.Email}`);
  
    Doctor_Detail.find({Doctor_email : req.body.Email}).lean().exec(function (err, data) {
        if (err) return console.log(err);
        // check if the opening is valid
        console.log(`jsonifies: ${JSON.parse(JSON.stringify(data))}`);
        console.log(`json value: ${data}`)

        data.forEach(element => {
            if(element == _id) var _id = element;
            if(element.Availabilty != undefined){
                var arr = element.Availabilty;
                for(var i = 0; i < arr.length; i++){
                    var str = JSON.stringify(arr[i]);
                    var jsonval = JSON.parse(str);
                    var day = jsonval.Day;
                    var Available = jsonval.Available;
                    console.log(`Day: ${day}`)
                    console.log(`Avail: ${Available}`)
                    var day = moment(day);
                    var requestDay = moment(req.body.Date);
                    var duration = moment.duration(day.diff(requestDay));
                    console.log(`duration: ${duration}`)
                    // check if the opening is valid
                    if(duration == 0 && Available == "YES"){

                        // NOW close the opening

                        Doctor_Detail.findOneAndUpdate({
                            "Doctor_email" : req.body.Email,
                            "Availabilty._id" : jsonval._id
                        },
                        {
                            $set:{"Availabilty.$.Available" : "NO"}
                            
                        },
                        {
                            select: { 
                                Availabilty: {
                                   $elemMatch: 
                                   {   Available : "NO" } 
                                }
                            }
                        },
                        function(err,result){
                            if (!err) {
                                console.log(result);
                            }
                        })
                        // Book the appointment
                        // let newAppointment = new Appointment_Detail(req.body)
                        // Appointment_Detail.insertOne(newAppointment, function(err, res) {
                        //     if (err) throw err;
                        //     console.log("1 document inserted");
                        //   })
                    }
                }
            }
          });
    });
};

