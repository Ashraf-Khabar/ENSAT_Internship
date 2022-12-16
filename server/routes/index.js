import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { getOffers } from "../controllers/Offres.js";
import {emailVerification, refreshToken} from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.get('/confirmation/:email', emailVerification);
router.delete('/logout', Logout);


/* Offers routes */
router.get('/offers',  getOffers);

export default router;