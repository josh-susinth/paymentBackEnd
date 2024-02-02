const { userCollection } = require('../dbConnection/mongoConn');

const insertUser = async (user) => {
    try {
        console.log(' inserting user --->');
        console.log(user);
        await userCollection.insertOne(user);
    }
    catch (e) {
        console.log(e);
    }
}

const getUser = async (mailId) => {
    try {
        const user = await userCollection.findOne({ email: mailId });
        return user;
    }
    catch (e) {
        console.log(e);
    }
}

const USER = {
    insertUser: insertUser,
    getUser: getUser
}

module.exports = USER;