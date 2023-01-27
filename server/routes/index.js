import express from "express";
import {getUsers, Register, Login, Logout, RegisterEmployee, getUserById} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { getOffers , getOffer, Addoffer } from "../controllers/Offres.js";
import {emailVerification, refreshToken} from "../controllers/RefreshToken.js";
import { AddApplication } from "../controllers/Applications.js";

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
router.post('/offers',  getOffer); 
router.post('/offers',  getOfferByEmployer); 
router.post('/Addoffer', Addoffer);

//employers

//StudentApplication
router.post('/AddApplication', AddApplication);

export default router;