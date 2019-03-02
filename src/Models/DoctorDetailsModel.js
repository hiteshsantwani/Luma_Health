var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');

const Schema = mongoose.Schema;

var DoctorDetailsSchema = new Schema({
    Doctor_email: {
      type: String,
      required: true,
      unique: true
    },
    F_name: {
      type: String,
      required: 'Enter a first name'
    },
    L_name: {
      type: String,
      required: 'Enter a Last name'
    },
    Speciality: {
      type: String,
      required: 'Enter a Speciality'
    }
});

DoctorDetailsSchema.plugin(uniqueValidator, {message: 'is already taken'});

mongoose.model('Doctor_Detail', DoctorDetailsSchema);