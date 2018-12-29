require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const databaseConnection = require('./config/database')(app);
const router = require('./routes/api')(app);
const adminRouter = require('./routes/admin')(app);
const auth = require('./config/authentication')(app);
const corsConfig = {
    origin: 'http://localhost:3000',
    credentials: true
};

app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json());
app.use(cors(corsConfig));

app.use('/api', router);
app.use('/admin', adminRouter);
app.use('/auth', auth);

app.listen(3005, () => console.log('server listening on port 3005'));