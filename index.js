// Please don't change the pre-written code
// Import the necessary modules here
// import UserController from "./src/controllers/user.controller.js";
import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import UserController from "./src/controllers/user.controller.js";

const app = express();
const Controller =new UserController();


app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

//create routes here
app.get('/register',Controller.getRegister);
app.post('/register',Controller.addUser);
app.get('/login',Controller.getLogin);
app.post('/login',Controller.loginUser);

export default app;
