const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000
const messageRouter = require('./routes/messageRouter');
const userRouter = require('./routes/userRouter');
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware');

connectDB();

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../src/index.html')))
app.use(express.static(path.resolve(__dirname, '../src/index.js')))

// app.get('/login', (req,res) => {
//     return res.status(200).send('ok')
// })
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname, '../src/index.html'));
// });

app.use('/api/messages', messageRouter);
app.use('/api/users', userRouter);
app.use(errorHandler); //instead of global error, we did an error middleware function, but global error seems to be working

// app.use('*', (req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

module.exports = app;