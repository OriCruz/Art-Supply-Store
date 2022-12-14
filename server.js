require('dotenv').config();
//#region Variables
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Supply = require('./models/supply-schema');
//#endregion

//#region Setting up middleware
app.use(methodOverride('_method'));
app.use((req, res, next)=>{
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended:false}));
//View engine set up
app.set('view-engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//#endregion

//#region setting up mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});
mongoose.set('strictQuery',true);
//#endregion

//#region Index route
app.get('/products', (req,res)=>{
    Supply.find({}, (error, allItems) =>{
        res.render('Index', {
            items: allItems//getting the items form the db to pass as props
        });
    });
});
//#endregion

