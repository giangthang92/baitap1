const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    const posttao = [
        {
            title: "Man must explore",
            description: " Manly12345", author: "Giang dai ca", createat: "16/03/2021"
        },
        {
            title: "Man must 13233",
            description: " Manly12343235", author: "Giang dai ca", createat: "16/03/2021"
        },
        {
            title: "Man 214232t",
            description: " Manly1234taddc5", author: "Giang dai ca", createat: "16/03/2021"
        },
        {
            title: "Man must explor 23111",
            description: " Manly123412121215", author: "Giang dai ca", createat: "16/03/2021"
        }
    ];
    res.render('client/page/index', {
        posts: posttao
    });
});
router.get('/post', (req, res) => {
    const posttao = { title: 'Giang', description: 'Giang AAAA', content: 'lap trinh nodejs', author: 'giangw', createdAt: '13-03-2021' }
    res.render('client/page/post', {
        post: posttao,
    });
})
router.get('/about', (req, res) => {
    res.render('client/page/about');
})
router.get('/contact', (req, res) => {
    res.render('client/page/contact');
});

//xuat doi tuong
module.exports = router;