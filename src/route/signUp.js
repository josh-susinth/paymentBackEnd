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

router.route("/signup").post(signUp);

module.exports = router;