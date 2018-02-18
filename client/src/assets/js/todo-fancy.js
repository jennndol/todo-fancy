let base_url = 'http://35.198.255.146:3000';

localStorage.setItem('fblogin', false);

let fbtoken = localStorage.getItem('accessToken');
let jwtToken = localStorage.getItem('token');

function statusChangeCallback(response) {
  if (response.status === 'connected') {
    localStorage.setItem('accessToken', response.authResponse.accessToken);
    if (jwtToken && window.location.href == '/#/login') {
      window.location.href = '/#';
      location.reload();
    } else {
      testAPI();
    }
  } else {
    console.log('Please log into this app.');
  }
}

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function () {
  FB.init({
    appId: '1703259413074110',
    cookie: true,
    xfbml: true,
    version: 'v2.8'
  });

  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });

};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function (response) {
    localStorage.setItem('fblogin', true);
    console.log('Successful login for: ' + response.name);

    axios.get(base_url + '/auth/loginfb', {
        headers: {
          token: fbtoken
        }
      })
      .then(payload => {
        localStorage.setItem('name', payload.data.user.name);
        localStorage.setItem('userId', payload.data.user._id);
        localStorage.setItem('token', payload.data.token);
      })
      .catch(error => {
        console.log(error);
      });
  });

}

function logout() {
  FB.logout(function (response) {});
  localStorage.clear();
  location.reload();
}

