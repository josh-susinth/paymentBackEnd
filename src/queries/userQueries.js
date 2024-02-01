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

const USER = {
    insertUser : insertUser
}

module.exports = USER;