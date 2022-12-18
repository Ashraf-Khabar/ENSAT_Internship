import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getOffers,createOffer } from "../controllers/Offres.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/newOffer', createOffer);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

// Offers routes
router.get('/offers',  getOffers);
//employers



export default router;