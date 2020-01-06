const express = require('express');
const connectDB  = require('./config/db');

const app = express();

connectDB();

app.use(express.json({extended: false}));

app.get('/',(req,res) => res.send('API Running'));

app.use('/api/user',require('./routes/api/user'));
app.use('/api/auth',require('./routes/api/auth'));

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => console.log(`Server start on port ${PORT}`));
