var admin = require("firebase-admin");


admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)),
    databaseURL: process.env.DATABASE_URL
});

const database = admin.firestore();
const analyticsCollection = database.collection('analytics');

exports.postSession = (req, res, next) => {
    let session = req.body;

    // console.log(session)
    // console.log(session.country)

    const analytic = analyticsCollection.doc();
    analytic.set(session, {
            merge: true
        })
        .then(() => {
            console.log('User has been added successfully !');
        })
        .catch(error => {
            console.error(error);
        })

    res.render('index', {
        // prods: products,
        pageTitle: 'Shop',
        path: '/'
    });

};