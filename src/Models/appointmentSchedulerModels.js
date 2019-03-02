import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AppointmentDetailsSchema = new Schema({
      A_Date: {
        type: Date,
        default: Date.now
      },
      Doctor_email: {
        type: Number,
        required: true
      },
      Patient_phone: {
        type: Number,
        required: true
      }
});

export const AvailabiltySchedule = new Schema({

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

export const DoctorDetailsSchema = new Schema({
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

export const PatientDetailsSchema = new Schema({
    Patient_phone: {
        type: Number,
        required: true,
        unique: true
      },
      F_name: {
        type: String,
        required: 'Enter a first name'
      },
      L_name: {
        type: String,
        required: 'Enter a first name'
      },
      Appointment_Dates: {
        type: [Date],
        required: 'Enter a Appointment Dates'
      }
});
