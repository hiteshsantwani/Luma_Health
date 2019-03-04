// Reduntant File
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
// var slug = require('slug');

const Schema = mongoose.Schema;

var AvailabiltyScheduleSchema = new Schema({

    Doctor_email: {
        type: String,
        unique: true,
        required: true,
      },
    Date: {
      type: Date,
      required: 'Enter a first name'
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

AvailabiltyScheduleSchema.methods.toJSONFor = function(){
    return {
        Date: this.Date,
        Doctor_email: this.Doctor_email,
        F_name: this.F_name,
        L_name: this.L_name,
        Timing: this.Timing
    };
  };

mongoose.model('Availabilty_Schedule', AvailabiltyScheduleSchema);
