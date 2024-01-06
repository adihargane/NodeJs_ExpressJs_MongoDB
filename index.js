const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/config/db.js');
const corsMiddleware = require('./src/middlewares/corsMiddleware.js');
const userRoute = require('./src/routes/userRoute.js')

const app = express();

app.use(bodyParser.json());

app.use(corsMiddleware);

db();

app.use('/api', userRoute)

app.get('/', (req, res) => {
    res.send('Application is started');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}`);
});