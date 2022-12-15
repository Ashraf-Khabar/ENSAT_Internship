import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(401);
        const user = await Users.findAll({
            where: {
                refresh_token: refreshToken
            }
        });
        if (!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);
            const userId = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            const role = user[0].role;
            const accessToken = jwt.sign({userId, name, email, role}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            });
            res.json({accessToken});
        });
    } catch (error) {
        console.log(error);
    }
}

// Retrieve token from route and find user with matching refresh token
export const emailVerification = async (req, res) => {
    try {
        const refreshToken = req.params.token;
        if (!refreshToken) return res.sendStatus(401);
        const user = await Users.findAll({
            where: {
                refresh_token: refreshToken
            }
        });
        if (!user[0]) return res.sendStatus(403);

        // Verify token and create new JWT
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);
            const email = user[0].email;
            const accessToken = jwt.sign({email}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            });

            // Update user record in database
            Users.update(
                {
                    emailConfirmed: true,
                },
                {
                    where: { refresh_token: refreshToken },
                }
            );

            // Return new JWT in response
            res.json({accessToken});
        });
    } catch (error) {
        console.log(error);
    }
};



// export const emailVerification = async (req, res) => {
//     try {
//         const refreshToken = req.query.token;
//         if (!refreshToken) return res.sendStatus(401);
//         const user = await Users.findAll({
//             where: {
//                 refresh_token: refreshToken
//             }
//         });
//         if (!user[0]) return res.sendStatus(403);
//         jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
//             if (err) return res.sendStatus(403);
//             const email = user[0].email;
//             const accessToken = jwt.sign({email}, process.env.ACCESS_TOKEN_SECRET, {
//                 expiresIn: '15s'
//             });
//             Users.update(
//                 {
//                     emailConfirmed: true,
//                 },
//                 {
//                     where: { refresh_token: refreshToken },
//                 }
//             );
//             res.json({accessToken});
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }









