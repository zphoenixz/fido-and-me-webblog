// require('dotenv').config();

function analytics() {
    console.log("Load complete...")

    fetch('https://api.ipify.org/?format=json').then(function (response) {
        response.json().then(function (data) {
            $.post("/admin/analytics",
                {'ip': data.ip},
                function (data, status) {}
            );
        });
    });
}