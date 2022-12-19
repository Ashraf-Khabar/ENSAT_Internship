import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import Employers from "../models/EmployerModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await Users.findOne({
            where: {
                email: req.body.email
            }
        });
        res.send({id: user.id});
    } catch (err) {
        res.status(404).json({msg: "Email not found"});
    }
}

export const Register = async (req, res) => {
    const {name, email, password, confPassword, role} = req.body;

    const existingUser = await Users.findOne({where: {email: email}});
    if (existingUser) {
        return res.status(400).json({msg: "Email is already in use"});
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        // host: "smtp.mailtrap.io",
        // port: 2525,
        auth: {
            user: "ashrafkhabaradm@gmail.com",
            pass: "reygamjexgfarxfm"
        }
    });

    const emailToken = jwt.sign({
        email: email,
        exp: Math.floor(Date.now() / 1000) + (60 * 60) /* 1 hour expiration time */
    }, 'your-secret-key');

    if (password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        const user = await Users.create({
            name: name,
            email: email,
            password: hashPassword,
            role: role,
            emailConfirmed: false
        });
        // Send a confirmation email to the user
        const mailOptions = {
            from: 'ashrafkhabaradm@gmail.com', /* sender address */
            to: email, /* list of receivers */
            subject: 'Registration Confirmation', /* Subject line */
            text: `Hi ${name},
            Thank you for registering with us. Your email address is ${email}.
            Click the following link to confirm your email address:
            http://localhost:5000/confirmation/${email}`
        };
        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).json({msg: "Failed to send confirmation email"});
            } else {
                res.json({id: user.id});
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export const RegisterEmployee = async (req, res) => {
    try {
        // Parse the request body
        const {
            denomination,
            city,
            laureate,
            legalStatus,
            RC,
            industry,
            ICE,
            nbrEmployees,
            phone,
            Id,
        } = req.body;
        // Check if the user with the specified UserId exists in the database
        const user = await Users.findByPk(Id);
        if (!user) {
            return res
                .status(404)
                .json({error: "No user was found with the specified UserId"});
        }

        // Update the user's record in the database
        const updatedRows = await Employers.update(
            {
                denomination: denomination,
                legal_status: legalStatus,
                industry: industry,
                city: city,
                ICE: ICE,
                RC: RC,
                nbr_employees: nbrEmployees,
                phone: phone,
                laureate: laureate,
            },
            {
                where: {UserId: Id},
            }
        );

        // Return a success message to the client
        return res.status(200).json({
            message: "The user's record was successfully updated",
            updatedRows,
        });
    } catch (error) {
        // Log the error to a file or database for later analysis
        console.error(error);
        // Return a user-friendly error message to the client
        return res
            .status(500)
            .json({error: "An error occurred while trying to update the user's record"});
    }
};

export const Login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) return res.status(400).json({msg: "Wrong Password"});
        if (!user[0].emailConfirmed) return res.status(400).json({msg: "Please confirm your email address before logging in"});
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const role = user[0].role;
        const accessToken = jwt.sign({userId, name, email, role}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({userId, name, email, role}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken}, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({accessToken});
    } catch (error) {
        res.status(404).json({msg: "Email not found"});
    }
}

export const Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({refresh_token: null}, {
        where: {
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}
