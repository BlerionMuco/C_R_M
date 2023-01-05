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
            res.send({ status: "fullfilled", message: "User found", token: token })
        } else {
            res.send({ status: "fullfilled", message: "No user found" })
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    authUser
};