import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()

if(process.env.NODE_ENV !== 'production') {
    app.use(cors())
}

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('ok')
})

app.post('/api/signup', (req, res) => {
    console.log(req.body);
    res.json({status: 'ok'});
})

app.listen(1221)
console.log('Server started on port 1221');