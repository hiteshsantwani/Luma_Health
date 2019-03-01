
 
import routes from "./src/Routes/appointmentSchedulerRoutes";
import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) =>

res.send(`Node and Express Server is running on port ${port}`)

);

app.listen(port, () =>
console.log(`your server is running on port ${port}`)
);

