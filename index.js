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
     const posttao = [
        {title:"Man must explore",
        description: " Manly12345", author : "Giang dai ca", createat: "16/03/2021"},
        {title:"Man must 13233",
        description: " Manly12343235", author : "Giang dai ca", createat: "16/03/2021"},
        {title:"Man 214232t",
        description: " Manly1234taddc5", author : "Giang dai ca", createat: "16/03/2021"},
        {title:"Man must explor 23111",
        description: " Manly123412121215", author : "Giang dai ca", createat: "16/03/2021"}
    ];
    res.render('client/page/index', {
        posts: posttao
    });
});
app.get('/post', (req, res) => {
    const posttao = {title: 'Giang',description : 'Giang AAAA',content: 'lap trinh nodejs',author:'giangw',createdAt:'13-03-2021'}
    res.render('client/page/post', {
        post: posttao,
    });
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