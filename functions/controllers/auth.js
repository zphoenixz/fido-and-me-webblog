const fetch = require('node-fetch');

const databaseService = require('../database/firestore');
const functions = require('firebase-functions');

exports.postSession = async (req, res, next) => {

    let client_ip = req.body.ip;
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${functions.config().someservice.key}&ip=${client_ip}`;
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
                        timeZone: data.time_zone.name,
                    };
                    console.log(analyticsData);
                    databaseService.postAnalytic(analyticsData);
                });
            })
            .then(json => console.log(json));
    } catch (error) {
        console.error("Error when saving analytic")
        console.error(error)
    }

    res.render('index', {
        // prods: products,
        pageTitle: 'Shop',
        path: '/'
    });

};

