var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');

const Schema = mongoose.Schema;

var AvailabiltyScheduleSchema = new Schema({

    Date: {
      type: Date,
      unique: true,
      required: 'Enter a first name'
    },
    Doctor_email: {
        type: String,
        required: true,
      },
    F_name: {
        type: String,
        required: 'Enter a first name'
      },
    L_name: {
      type: String,
      required: 'Enter a Last name'
    },
    Timing: {
      type: [Number],
      required: 'Enter Times available'
    }
});

AvailabiltyScheduleSchema.plugin(uniqueValidator, {message: 'is already taken'});

mongoose.model('Availabilty_Schedule', AvailabiltyScheduleSchema);
