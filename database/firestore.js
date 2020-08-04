var admin = require("firebase-admin");

const postModel = require("../models/post");

admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)),
    databaseURL: process.env.DATABASE_URL
});


const database = admin.firestore();

const analyticsCollection = database.collection('analytics');
const postsCollection = database.collection('blogposts');

exports.postAnalytic = async (analyticsData) => {
    const analytic = analyticsCollection.doc();
    analyticsData.timestamp = admin.firestore.Timestamp.now(),
        await analytic.set(analyticsData, {
            merge: true
        })
        .then(() => {
            console.log('New analytic has been added successfully!');
        })
        .catch(error => {
            console.error(error);
        })
}

exports.getPosts = async (analyticsData) => {
    try {
        var response = await postsCollection.orderBy("date", "desc").get();
        var posts = response.docs.map(doc => doc.data());

        return posts;
    } catch (error) {
        console.log(error);
        // return error;
    }
}