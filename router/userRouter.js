import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
   getAllDoctors,
  getUserDetails,
   login,
  logoutAdmin, 
  logoutPatient,
 patientRegister,
} from "../controller/userController.js";
 import {
   isAdminAuthenticated,
   isPatientAuthenticated,
 } from "../middlewares/auth.js";

 const router = express.Router();

router.post("/patient/register", patientRegister);
 router.post("/login", login);
 router.post("/admin/addnew", addNewAdmin);
 router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
router.get("/doctors", getAllDoctors);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
 router.get("/admin/me", isAdminAuthenticated, getUserDetails);
 router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
 router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

export default router;




// import express from "express";
// import {
//   addNewAdmin,
//   addNewDoctor,
//   getAllDoctors,
//   getUserDetails,
//   login,
//   logoutAdmin,
//   logoutPatient,
//   patientRegister,
// } from "../controller/userController.js";
// import {
//   isAdminAuthenticated,
//   isPatientAuthenticated,
// } from "../middlewares/auth.js";

// const router = express.Router();

// // Register patient route
// router.post("/patient/register", patientRegister);

// // Login route
// router.post("/login", login);

// // Route to add a new admin without authentication
// router.post("/admin/addnew", addNewAdmin);  // This route does not require authentication

// // Other admin and doctor routes that require authentication
// router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin); // Admin with authentication
// router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor); // Admin with authentication

// // Get all doctors
// router.get("/doctors", getAllDoctors);

// // Get user details (authenticated)
// router.get("/patient/me", isPatientAuthenticated, getUserDetails);
// router.get("/admin/me", isAdminAuthenticated, getUserDetails);

// // Logout patient and admin
// router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
// router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

// export default router;

