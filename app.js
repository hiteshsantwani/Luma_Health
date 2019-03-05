var http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors');
    let morgan = require('morgan');

const app = express();
app.use(cors());
const port = 3000;

// ======================================= Basic Error Handling =================

/// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
// ==============================================================================

// to do: Move configuration to external file
// mongoose connection

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'AppointmentScheduler';      // REPLACE WITH YOUR DB NAME

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       });

// bodyparser setup
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes(app);
let routes = require('./src/Routes/appointmentSchedulerRoutes');

app.post('/AddDoctor/', routes);
app.get('/getWorkingHoursDoctor/:Email', routes);
app.post('/bookWorkingHoursDoctor/', routes);

//to do: When deploying this application need to undersatnd how to get the open port dynamicallt
app.listen(port, () =>
console.log(`your server is running on port ${port}`)
);

module.exports = app // For Testing
