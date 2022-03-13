const databaseService = require('../database/firestore');

exports.getHome = async (req, res, next) => {
    try {
        var posts = await databaseService.getPosts();
        
        res.render('index', {
            posts: posts,
            path: '/'
        });
    } catch (error) {
        console.log(error);
    }
};

exports.getCv= async (req, res, next) => {
    try {
        res.render('cv', {
            path: '/cv1'
        });
    } catch (error) {
        console.log(error);
    }
};