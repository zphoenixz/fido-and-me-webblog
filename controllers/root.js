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