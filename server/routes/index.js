import express from "express";
import {getUsers, Register, Login, Logout, RegisterEmployee, getUserById} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { getOffers , getOffer, Addoffer, getOfferByEmployer } from "../controllers/Offres.js";
import {emailVerification, refreshToken} from "../controllers/RefreshToken.js";
import { AddApplication, getApplications } from "../controllers/Applications.js";
import { getStudent } from "../controllers/Students.js";
import { getEmployer } from "../controllers/Employers.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);

router.post('/users', Register); 

router.get('/user', getUserById);

router.post('/Employee', RegisterEmployee);

router.post('/login', Login);

router.get('/token', refreshToken);

router.get('/confirmation/:email', emailVerification);

router.delete('/logout', Logout);

/* Offers routes */
router.get('/offers',  getOffers);
router.post('/offer',  getOffer); 
router.get('/offersEmployer', getOfferByEmployer); 
router.post('/Addoffer', Addoffer);

//employers
router.post('/employer', getEmployer); 

//StudentApplication
router.post('/AddApplication', AddApplication);
router.get('/Applications', getApplications); 

//Student routes
router.post('/student',  getStudent); 


export default router;