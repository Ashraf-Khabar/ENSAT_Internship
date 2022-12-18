import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getOffer, getOffers } from "../controllers/Offres.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

// Offers routes

router.get('/offers',  getOffers); //route to get all offers + their employers informations

router.post('/offer',  getOffer); //route to get 1 offer and its employer informations
export default router;