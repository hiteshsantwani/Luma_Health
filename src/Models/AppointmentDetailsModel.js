var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');

const Schema = mongoose.Schema;

var  AppointmentDetailsSchema = new Schema({
      A_Date: {
        type: Date,
        unique: true,
        default: Date.now
      },
      Doctor_email: {
        type: String,
        required: true
      },
      Patient_phone: {
        type: Number,
        required: true
      }
});

AppointmentDetailsSchema.plugin(uniqueValidator, {message: 'is already taken'});
