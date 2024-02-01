const express = require('express');
const app = express();
const signUpRouter = require('./route/signUp');

const PORT = 3000;

app.use(express.json());
app.use(signUpRouter);


app.listen(PORT, () => { console.log(`listening at PORT : ${PORT}`) });