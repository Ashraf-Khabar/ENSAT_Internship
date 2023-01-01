import express from "express";
import {getUsers, Register, Login, Logout, RegisterEmployee, getUserById} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import {getOffer, getOffers, Addoffer } from "../controllers/Offres.js";
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

// Offers routes
router.get('/offer',  getOffer);
router.get('/offers',  getOffers);

//employers

//StudentApplication
router.post('/AddApplication', AddApplication);


export default router;