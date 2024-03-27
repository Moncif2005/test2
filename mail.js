const express = require('express');
const app = express()
const nodemailer = require('nodemailer');

const cors = require('cors');

const PORT = process.env.PORT || 5000;


app.use(express.static('html'))
app.use(express.json())
app.use(cors());


app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/html/contact.html')
})

app.post('/',(req, res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gamerarabde@gmail.com',
            pass: 'ejpl cqih uoth itst',
        }
    });

    const mailOption = {
        from: req.body.email,
        to: 'gamerarabde@gmail.com',
        text: req.body.message
    }

    transporter.sendMail(mailOption, (error, info)=> {
        if(error){
            console.log(error)
            res.send('error')
        }else{
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})