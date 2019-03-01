import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});


export const AppointmentDetailsSchema = new Schema({
    Appointment_id: {
        type: Number,
        required: true,
        index: true,
        unique: true
      },
      A_Date: {
        type: Date,
        default: Date.now
      },
      Doctor_id: {
        type: Number,
        required: true
      },
      Patient_id: {
        type: Number,
        required: true
      }
});

export const DayScheduleSchema = new Schema({
    1: {
        type: String
      },
    2: {
        type: String
      },
    3: {
        type: String
      },
    4: {
        type: String
      },
    5: {
        type: String
      },
    9: {
        type: String
      },
    10: {
        type: String
      },
    11: {
        type: String
      },
    12: {
        type: String
      }
});

export const AvailabilityDetailsSchema = new Schema({
      Monday: {
        type: DayScheduleSchema
      },
      Tuesday: {
        type: DayScheduleSchema
      },
      Wednesday: {
        type: DayScheduleSchema
      },
      Thursday: {
        type: DayScheduleSchema
      },
      Friday: {
        type: DayScheduleSchema
      },
      Saturday: {
        type: DayScheduleSchema
      },
      Sunday: {
        type: DayScheduleSchema
      }
});

export const ScheduleDetailsSchema = new Schema({
    Monday: {
      type: DayScheduleSchema
    },
    Tuesday: {
      type: DayScheduleSchema
    },
    Wednesday: {
      type: DayScheduleSchema
    },
    Thursday: {
      type: DayScheduleSchema
    },
    Friday: {
      type: DayScheduleSchema
    },
    Saturday: {
      type: DayScheduleSchema
    },
    Sunday: {
      type: DayScheduleSchema
    }
});

export const DoctorDetailsSchema = new Schema({
    Availability: {
        type: AvailabilityDetailsSchema,
        required: true
      },
      Doctor_id: {
        type: Number,
        required: true,
        index: true,
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
      Schedule: {
          type: ScheduleDetailsSchema,
          required: true
      },
      Speciality: {
        type: String,
        required: 'Enter a first name'
      }
});

export const PatientDetailsSchema = new Schema({
    Patient_id: {
        type: Number,
        required: true,
        index: true,
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
      Schedule: {
          type: ScheduleDetailsSchema,
          required: true
      },
      Appointment_ids: {
        type: [Number]
      }
});
