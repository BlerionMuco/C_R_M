"use strict";
const authData = require("../data/auth");
const jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
    try {
        const data = req.body;
        const { username, user_password } = data;
        const user = await authData.authUser({ username, user_password });
        if (user.length > 0) {
            const token = jwt.sign(
                { user_id: username, user_password },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            res.send({ status: "success", message: "User logged in successfully !", token: token, user: user[0] })
        } else {
            res.send({ status: "rejected", message: "User not found !" })
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    authUser
};