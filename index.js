const express = require('express');
const ejs = require('ejs');
const ejsengine = require('ejs-mate');

const app = express();
const port = 3002;

app.set('view engine','ejs');
app.set('views','./views')
app.get('ejs',ejsengine);
app.use('/public', express.static('./public'));
app.engine('ejs',ejsengine);

app.get('/', (req, res) => {
    res.render('client/page/index');
});
app.get('/post', (req, res) => {
    res.render('client/page/post');
})
app.get('/about', (req, res) => {
    res.render('client/page/about');
})
app.get('/contact', (req, res) => {
    res.render('client/page/contact');
})

app.listen(port, () => {
    console.log('>Running');
}); 