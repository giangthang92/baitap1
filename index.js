const express = require('express');
const ejs = require('ejs');
const ejsengine = require('ejs-mate');
const routes = require('./routes/index');

const app = express();
const port = 3002;

app.set('view engine','ejs');
app.set('iewsv','./views')
app.get('ejs',ejsengine);
app.use('/public', express.static('./public'));
app.engine('ejs',ejsengine);
app.use(routes);


app.listen(port, () => {
    console.log('>Running');
}); 