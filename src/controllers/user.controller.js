// Please don't change the pre-written code
// Import the necessary modules here
import { authenticateUser, registerUser } from "../models/user.model.js";

export default class UserController {
  getRegister = (req, res, next) => {
    // Write your code here
    
    res.render('user-register');
  };
  getLogin = (req, res, next) => {
    // Write your code here

    res.render('user-login')
  };
  addUser = (req, res) => {
    // Write your code here
    // const{name,email,password}=req.body;
    const user = registerUser(req.body);
    if(user){
      return res.render('user-login')
    }
  };
  loginUser = (req, res) => {
    // Write your code here
    // const{email,password}=req.body;
    const user=authenticateUser(req.body);
    if(user){
      res.send({ success: "true", message: "login successful" });
      }else{
        res.send({ success: "False", message: "login failed" });
      }
  };
}
