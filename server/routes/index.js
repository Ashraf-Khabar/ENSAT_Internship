import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import {getOffer, getOffers, Addoffer } from "../controllers/Offres.js";
import { AddApplication } from "../controllers/Applications.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/Addoffer', Addoffer);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

// Offers routes
router.get('/offer',  getOffer);
router.get('/offers',  getOffers);

//employers

//StudentApplication
router.post('/AddApplication', AddApplication);


export default router;