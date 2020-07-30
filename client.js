const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const path = require('path');
const { router } = require('./routes/router');

const app = express();
const port = process.env.PORT || 3002;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieSession({
    name: 'session',
    keys: ['123456']
}));

app.use(express.static(path.join(__dirname, '/')));

app.use(require('./middleware/auth'));

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});


app.use(router);