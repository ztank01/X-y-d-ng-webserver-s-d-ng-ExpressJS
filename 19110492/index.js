const express = require('express');
const app = express();
const PORT = 5000;

const homeRoute = require('./routes/homeRoute');
const mssvRoute = require('./routes/mssvRoute');
const messageRoute = require('./routes/messageRoute');

app.use(express.json());

app.use((req,resp,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/', homeRoute);

app.use('/19110492', mssvRoute);

app.use('/message', messageRoute);

app.listen(PORT, () => {
    console.log(`App Server start at port ${PORT}`);
});