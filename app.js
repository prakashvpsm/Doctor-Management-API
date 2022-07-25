const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');


const userRoutes = require('./routes/userRoutes');
const slotRoutes = require('./routes/slotRouter');
const patientRoutes = require('./routes/patientRoutes');


const globalErrHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const app = express();

app.use(cors());
app.use(helmet());
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too Many Request from this IP, please try again in an hour'
});
app.use('/api', limiter);

app.use(express.json({
    limit: '15kb'
}));
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/slots', slotRoutes);
app.use('/api/v1/patients', patientRoutes);

app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;