const { Router } = require('express');
const USER = require('../queries/userQueries');

const router = Router();

const signUp = async (req, res) => {
    try {
        const user = req.body;
        const { insertUser } = USER;
        const r = await insertUser(user);
        console.log(r);
        res.sendStatus(201);
    }
    catch (e) {
        console.log(e);
    }
}

const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { getUser } = USER;
        const user = await getUser(email);
        if (!user) {
            console.log("invalid User")
            res.send("email error")
        }
        if (user.password !== password) {
            console.log("Invalid Credentials");
            res.send("pwd error")
        }
        console.log(`${user.name} logged in`);
        res.send(200);
    }
    catch (e) {
        console.log(e);
    }
}

router.route("/signup").post(signUp);
router.route("/login").post(logIn);

module.exports = router;