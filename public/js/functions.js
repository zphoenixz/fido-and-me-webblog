
function analytics(){
    console.log("Load complete...")

    fetch('https://api.ipify.org/?format=json').then(function(response) {
        response.json().then(function(data) {
            // console.log(data.ip)
            fetch('//ip-api.com/json/' + data.ip + '?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query').then(function(response) {
                response.json().then(function(data) {
                    // console.log(data)
                    let date = new Date();
                    let timestamp = date.getTime();

                    let analyticsData = {
                        country: data.country,
                        city: data.city,
                        lat: data.lat,
                        lon: data.lon,
                        ip: data.query,
                        timestamp: timestamp,
                        timeZone: data.timezone,
                        mobile: data.mobile
                    };
                    console.log(analyticsData);
                    $.post("/admin/user/session",
                        analyticsData,
                        function(data,status){
                            
                        }
                    );

                
                });
            });
        });
    });
}