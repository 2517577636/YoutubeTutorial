const path = require('path');
const express = require('express');
// const moment = require('moment');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
// const members = require('./Members');

const app = express();

// Init middleware
app.use(logger);

//Express-handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

// Body Parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// HomePage
app.get('/',  (req, res) => {
    res.render('index.handlebars', {
        title: "Members App"
    });
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./router/api/member'));

const PORT = process.env.PORT || 3000;

// app.get('/',  (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));