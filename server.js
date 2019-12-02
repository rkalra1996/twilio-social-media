const process = require('process');
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const mainPort = process.env.PORT;

// importing routes from different routers
const {twRouter} = require('./routes/routes-main');
// importing twilio for whatsapp
const twilio = require('twilio');

// importing account sid and account token of whatsapp application installed in twilio
const accountSid = ''
const authToken = ''
// const client = twilio(accountSid, authToken);

app.use(cors());
app.use(bodyParser.json());
app.get('/status', (req,res) => {
    res.status(200).send('I am alive');
})

app.use('/tw-whatsapp', twRouter);

app.listen(mainPort, () => {
    console.log('main server is burning hot at ', mainPort);
});