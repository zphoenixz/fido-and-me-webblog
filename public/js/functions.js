// require('dotenv').config();

function analytics() {
  console.log("Load complete...");

  fetch("https://api.ipify.org/?format=json", {
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(function (response) {
    response.json().then(function (data) {

      $.post(
        "/admin/analytics",
        {
          mode: "cors",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          ip: data.ip,
        },
        function (data, status) {}
      );
    });
  });
}
