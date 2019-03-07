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

    // Book the doctor opening 
    async bookDoctorOpening(req, res) {
        try{
            console.log(`Doctor_email booking : ${req.body.Doctor_email}`)
            Doctor_Detail.find({Doctor_email : req.body.Doctor_email}).exec(function (err, data) {
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
                            var requestDay = moment(req.body.A_Date);
                            var duration = moment.duration(day.diff(requestDay));
                            console.log(`duration: ${duration}`)
                            // check if the opening is valid
                            if(duration == 0 && Available == "YES"){
        
                                // NOW close the opening
        
                                Doctor_Detail.findOneAndUpdate({
                                    "Doctor_email" : req.body.Doctor_email,
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
                                let newAppointment = new Appointment_Detail(req.body)
                                newAppointment.save((err, newAppointment) => {
                                    if (err) {
                                        res.send(err);
                                     }
                                        res.json(newAppointment);
                                })
                            } else{
                                res.json("No Match Found")
                            }
                        }
                    }
                  });
                });
            } catch (err) {
                return err;
        }
    }

// Create and Update the working hours of doctor. 
async createWorkingHoursDoctor(req, res) {
    await console.log(`Request:  ${req.body.Doctor_email} and ${req.body.YES}`);

    await console.log(`Request:  ${req.body.Doctor_email} and ${req.body.NO}`);

    //using for each
    var available = "YES";
    await this.process(req, available).catch(e => {
        console.log(`${e}`)
    });
    available = "NO";
    await this.process(req, available).catch(e => {
        console.log(`${e}`)
    });    
    //res.json("Data Updated");
}

    async process(req, available) {
        if(available == "YES"){
            var arr = req.body.YES;
        } else{
            arr = req.body.NO;
        }
        await arr.forEach( async (element) => {
            await console.log(`${available} Element: ${element}`);
            await this.processEach(req, element, available).catch(e => {
                console.log(`${e}`)
            });
        });
    }

    async processEach(req, element, available) {
        await Doctor_Detail.findOneAndUpdate({
            "Doctor_email": req.body.Doctor_email,
            "Availabilty": {
                "$elemMatch":{
                    "Day" : new Date(element),
                    $or : [{ "Available": "YES" }, { "Available": "NO" }]
                    }
                }
        }, {
                $set: { "Availabilty.$.Available": available }
            }, { "upsert": true }, async function (err, result) {
                console.log(`Inside ${available} element`);
                if (err != null) {
                    console.log(`Error: ${err}`);
                    console.log(`Element: ${element}`);
                    console.log(`Now creating new element inside the Document`);
                    await Doctor_Detail.findOneAndUpdate({
                        "Doctor_email": req.body.Doctor_email,
                    }, {
                            $push: {
                                Availabilty: {
                                    "Day": element,
                                    "Available": available
                                }
                            }
                        },
                        {
                            async function(err, result) { await 
                                console.log(`Error while creating new element ${available} ${err} and ${result}`); }
                        }).catch(e => {
                            console.log(`${e}`)
                        });
                }
            }).exec();
    }
}

module.exports = new AppointmentSchedulerService();