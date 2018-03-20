var auth2;
var googleUser = {};
var auth3;

window.onLoadCallback = function () {
    gapi.load('auth2', function () {
        auth2 = gapi.auth2.init({
            client_id: '**********.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            // Request scopes in addition to 'profile' and 'email'
            scope: 'profile email'
        });

        auth3 = true;
        startApp();
    })

}

var startApp = function () {
    element = document.getElementById('g_login');
    auth2.attachClickHandler(element, {},
        function (googleUser) {
            console.log("4");
            document.getElementById('name').innerText = "Signed in: " + googleUser.getBasicProfile().getName();
            angular.element(document.getElementById('status')).scope().googleLogin(googleUser.getAuthResponse().id_token);
        },
        function (error) {
            console.log("5");
            alert(JSON.stringify(error, undefined, 2));
        });
};

if (auth3)
    startApp();