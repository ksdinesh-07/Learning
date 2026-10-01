import express from 'express';

const app = express();


app.use(express.json());

//application lvl middleware
app.use((req, res, next) => {
    console.log('Application middleware');
    next(); // allows to move to the next level
});

// when the user get the request ()===> GET /api/users

// flow ---> req ---> express.json() ---> application middleware