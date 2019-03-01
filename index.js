
 
import routes from "./src/Routes/appointmentSchedulerRoutes";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useMongoClient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>

res.send(`Node and Express Server is running on port ${port}`)

);

app.listen(port, () =>
console.log(`your server is running on port ${port}`)
);

