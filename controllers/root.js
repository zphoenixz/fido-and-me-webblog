// const Product = require('../models/product');


exports.getHome = (req, res, next) => {

    res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
    });

};