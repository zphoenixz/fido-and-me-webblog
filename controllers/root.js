// const Product = require('../models/product');


exports.getHome = (req, res, next) => {
    // fetch('https://api.ipify.org/?format=json')
    //     .then(results => results.json)
    //     .then(data => console.log(data.ip));
    res.render('index', {
        // prods: products,
        pageTitle: 'Shop',
        path: '/'
    });

};