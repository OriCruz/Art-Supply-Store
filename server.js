require('dotenv').config();
//#region Variables
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
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
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
mongoose.set("strictQuery",true);
//#endregion

//#region setting up mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});
mongoose.set('strictQuery',true);
//#endregion

//#region root route
app.get('/', (req, res)=>{
    res.render('Root');
   
});
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

//#region New route
app.get('/products/new', (req, res)=>{
    res.render('New');
});
//#endregion

//#region Delete
app.delete('/products/:id', (req,res) =>{
    Supply.findByIdAndDelete(req.params.id, (err, data)=>{
        res.redirect('/products/');
    });
});
//#endregion

//#region Update
app.put('/products/:id', (req,res)=>{
    console.log(req.body);
    if(req.body.quantity==='BUY'){
        console.log('hello');
       Supply.findByIdAndUpdate(req.params.id, {$inc:{'quantity':-1}}, (err, updatedItem)=>{
        res.redirect(`/products/${req.params.id}`)
       })
    }
    else{ 
        Supply.findByIdAndUpdate(req.params.id, req.body, (err,updatedItem)=>{
        res.redirect(`/products/${req.params.id}`);
        });
    }
    
});


//#endregion

//#region Create 
app.post('/products', (req, res)=>{
    Supply.create(req.body, (error, addedItem)=>{
        res.redirect('/products');
    });
});
//#endregion

//#region Edit route
 app.get('/products/:id/edit', (req,res)=>{
    Supply.findById(req.params.id, (err, foundItem)=>{
        if(!err){
            res.render('Edit', {item: foundItem});
        }
        else{
            res.send({msg:err.message});
        }
    });
 });


//#endregion

//#region Show route
app.get('/products/:id', (req,res)=>{
    Supply.findById(req.params.id, (err, foundItem)=>{
        res.render('Show',{ items:foundItem}
        );
    });
});
//#endregion

//app listening on port
app.listen(port, ()=>{
    console.log("listeting on port "+port);
});