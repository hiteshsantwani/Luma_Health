
//During the test the env variable is set to test
//process.env.NODE_ENV = 'test';
let mongoose = require("mongoose");
let AppointmentDetail = require('../src/Models/AppointmentDetailsModel');
let DoctorDetail = require('../src/Models/DoctorDetailsModel');
let PatientDetail = require('../src/Models/PatientDetailsModel');


const Doctor_Detail_model = mongoose.model('Doctor_Detail');
const Patient_Detail_model = mongoose.model('Patient_Detail');
const Appointment_Detail_model = mongoose.model('Appointment_Detail');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('AppointmentScheduler', () => {
	beforeEach((done) => { //Before each test we empty the database
		Appointment_Detail_model.remove({}, (err) => { 	   
        });
        Doctor_Detail_model.remove({}, (err) => { 	   
         });
         Patient_Detail_model.remove({}, (err) => { 	   
         });
         done();	
	});
 /*
  * Test the /GET route
  */
  describe('/GET/:Email getWorkingHoursDoctor', () => {
	  it('it should GET the Working hours of Doctor with Availability Information', (done) => {

        let Doctor = new Doctor_Detail_model({
            // Create the new object and save it in DB
            Doctor_email: "hiteshka@buffalo.edu",
            Speciality: "ENT",
            Availabilty: [{"Day" : "1/1/1 0:0:0", "Available" : "YES"}, 
            {"Day" : "2/1/2 0:0:0", "Available" : "NO"}] });

            Doctor.save((err, doctor) => {
        chai.request(server)
        .get('getWorkingHoursDoctor/' + doctor.Doctor_email)
        .send(doctor.Availabilty)
        .end((err, res) => {
            should.exist(res);
            res.should.have.status(200);
            res.body.should.be.a('object');
            // res.body.should.have.property('Day');
            // res.body.should.have.property('Available');
            done();
          });
        });
	  });
  });

/*
  * Test the /POST route
  */
 describe('/POST AddDoctor', () => {
  it('it should add new Doctor Details in the data base', (done) => {

        let Doctor = new Doctor_Detail_model({
            // Create the new object and save it in DB
            Doctor_email: "hiteshka@buffalo.edu",
            Speciality: "ENT",
            Availabilty: [{"Day" : "1/1/1 0:0:0", "Available" : "YES"}, 
            {"Day" : "2/1/2 0:0:0", "Available" : "NO"}] });

    chai.request(server)
      .post('/AddDoctor')
      .send(Doctor)
      .end((err, res) => {
        should.exist(res.body);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('Doctor_email');
        res.body.should.have.property('Speciality');
        done();
      });
  });
});
});