const express = require('express');
const {json} = require('express')
const connect = require('./config/db');
const flightRoute = require('./router/flightRouter')

connect();

const app = express();
app.use(json());
app.use('/flight', flightRoute);


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('jdjdjdjdj')
})

app.listen(PORT, () => console.log(`Serving on port ${PORT}`))