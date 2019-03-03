
 
import routes from "./src/Routes/appointmentSchedulerRoutes";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

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

routes(app);

app.get('/', (req, res) =>

res.send(`Node and Express Server is running on port ${port}`)

);

//to do: When deploying this application need to undersatnd how to get the open port dynamicallt
app.listen(port, () =>
console.log(`your server is running on port ${port}`)
);
