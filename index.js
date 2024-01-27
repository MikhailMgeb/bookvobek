const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.post('/bookvobek', (req, res) => {
    const fact = String(req.body.input);
    const answerServer = {};
    let number = 1;

    for (let i = 0; i < fact.length; i++) {
        if (answerServer[fact[i]]) {
            answerServer[fact[i]] += number;
        } else {
            answerServer[fact[i]] = number;
        }
    };

    res.json(answerServer);
})

app.listen(port, () => {
    console.log(`Приложение запущено и слушает порт ${port}`);
});
