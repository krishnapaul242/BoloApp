import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './models/Users';
import jwt from 'jsonwebtoken';

const JWT_WEB_TOKEN = "qt3o47y*o Heu3t7eYWH irwt3E LI&QYW ERI7y#WyeDHEU#*OYFH:O#{_r]=4ww-=rpglrspgw4o-tw4g";
const app = express()

mongoose.connect('mongodb://localhost:27017/SimpleChat?readPreference=primary&ssl=false');

if(process.env.NODE_ENV !== 'production') {
    app.use(cors())
}

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('ok')
})


//TODO: Hashing the password
app.post('/api/signup', async (req, res) => {
    console.log(req.body);

    const {email, password} = req.body;
    if(!email || !password) res.json({status: 'error', error: 'invalid email/password'})

    try {
        const user = new User({ email, password })
        await user.save()
    } catch (error) {
        console.log(error)
        res.json({status: 'error', error: 'duplicate email'})
    }
    res.json({status: 'ok'});
})

app.post('/api/login', async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) res.json({status: 'error', error: 'invalid email/password'});
    const user = await User.findOne({email, password}).lean();
    if(!user) {
        res.json({status: 'error', error: 'Email and password doesn\'t match.'});
    }
    console.log(user);

    const payload = jwt.sign({ email }, JWT_WEB_TOKEN);

    res.json({status: 'ok', data: user});
})

//TODO: Refresh tokens
//TODO: Use in memory instead of localstorage

app.listen(1221)
console.log('Server started on port 1221');