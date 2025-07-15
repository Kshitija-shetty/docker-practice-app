const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//mongoose connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => console.log("mongodb connected"))
  .catch(err => console.log("mongodb error:",err));
 
app.get('/',(req,res) => {
    res.send('Yo! your docker app with mongoDB is running fine');
});

app.listen(PORT,() => {
    console.log(`server is live on http://localhost:${PORT}`);
});