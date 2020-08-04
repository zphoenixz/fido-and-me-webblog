var admin = require("firebase-admin");
const fetch = require('node-fetch');

admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)),
    databaseURL: process.env.DATABASE_URL
});

const database = admin.firestore();
const analyticsCollection = database.collection('analytics');

exports.postSession = async (req, res, next) => {

    let client_ip = req.body.ip;
    const analytic = analyticsCollection.doc();

    console.log(client_ip);
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IP_API_KEY}&ip=${client_ip}`;
    console.log(url);
    try {
        await fetch(url)
            .then((response) => {
                response.json().then(function (data) {
                    let analyticsData = {
                        country: data.country_name,
                        city: data.city,
                        lat: data.latitude,
                        lon: data.longitude,
                        ip: data.ip,
                        timestamp: admin.firestore.Timestamp.now(),
                        timeZone: data.time_zone.name,
                    };
                    console.log(analyticsData);
                    // analytic.set(analyticsData, {
                    //         merge: true
                    //     })
                    //     .then(() => {
                    //         console.log('New analytic has been added successfully!');
                    //     })
                    //     .catch(error => {
                    //         console.error(error);
                    //     })

                });
            })
            .then(json => console.log(json));
    } catch (error) {
        console.error(error)
    }

    res.render('index', {
        // prods: products,
        pageTitle: 'Shop',
        path: '/'
    });

};