const process = require('process');
const express = require('express');
const app = express();

const mainPort = process.env.PORT;

// importing routes from different routers
const {twRouter} = require('./routes/routes-main');
// importing twilio for whatsapp
app.use(express.urlencoded())
// app.use(cors());
// app.use(bodyParser.json());
app.get('/status', (req,res) => {
    res.status(200).send('I am alive');
})

app.use('/tw-whatsapp', twRouter);

app.listen(mainPort, () => {
    console.log('main server is burning hot at ', mainPort);
});