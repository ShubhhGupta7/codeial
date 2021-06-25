const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const { urlencoded } = require('express');

// Middleware to decrypt the form encripted data
app.use(express.urlencoded());
// Middleware to create and alter keys
app.use(cookieParser());

// Using layouts with partials
app.use(expressLayouts);

// using Static files.
app.use(express.static('./asserts'));
// Extract styles and scripts from the sub pages to the layout.
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use express router.
app.use('/', require('./routes'));

// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err) {

    if(err) {
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is runnig on port no. : ${port}`);
});