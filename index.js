const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();


/** PASSPORT BASIC */
/*passport.use(require('./src/auth/basic'))
app.get('*',passport.authenticate('basic',{session:false}))
*/

//Configuiração do morgan
app.use(morgan('dev'));

//Configuiração do body Parser
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());  

app.use(passport.initialize());
app.set('view engine','pug');
app.set('views',path.join(__dirname,'src/view'))
require('./src/index')(app);
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true });

app.listen(9000,()=>{
    console.log('Express has been started');
})