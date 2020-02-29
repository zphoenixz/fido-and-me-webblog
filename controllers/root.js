// const Product = require('../models/product');


exports.getHome = (req, res, next) => {

    res.render('index', {
        // prods: products,
        pageTitle: 'Shop',
        path: '/'
    });

};