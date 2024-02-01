const { config } = require('dotenv');
const { MongoClient } = require('mongodb');
config();

const uri = process.env.DB_URI;


let mongoClient = new MongoClient(uri);
mongoClient.connect();

const db = mongoClient.db('payment');
const userCollection = db.collection('users');



module.exports = { userCollection }

