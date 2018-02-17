<template>
  <div>
    <loading></loading>
    <div id="fullscreen_bg" class="fullscreen_bg" />
    <div class="container">
      <div class="row center-block">
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default">
            <div class="panel-heading">
              <strong>Login</strong>
            </div>
            <div class="panel-body">
              <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Email">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
              </div>
              <button class="btn btn-primary btn-block" v-on:click="login">Login</button>
              <h3>OR</h3>
              <center>
                <div style="padding: 1em;" class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false"
                  data-auto-logout-link="false" data-use-continue-as="false"></div>
                <div id="status"></div>
              </center>
              <div class="alert alert-danger" v-show="message">{{message}}</div>
            </div>
            <div class="panel-footer">
              <router-link to="register">Register here</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from "./Quote.vue";  

  export default {
    components: {
      'loading': Quote,
    },
    data() {
      return {
        title: 'Login Page!',
        message: null
      }
    },
    beforeMount: function () {
      $(document).ready(function () {
        if (localStorage.getItem('token')) {
          window.location.href = '/#';
          location.reload();
        }
      });
    },
    methods: {
      login() {
        let email = $('#email').val();
        let password = $('#password').val();
        axios.post('http://localhost:3000/auth/login', {
            email,
            password
          })
          .then(payload => {
            console.log(payload);
            this.message = null
            localStorage.setItem('name', payload.data.owner.name);
            localStorage.setItem('token', payload.data.token);
            window.location.href = '/#';
            location.reload();
          })
          .catch(error => {
            console.log(error);
            this.message = 'Email or password you entered wrong!'
          });
      }
    }
  }

</script>

<style scoped>
  .center-block {
    margin-top: 15%;
  }

  h3 {
    text-align: center;
  }

  body {
    padding-top: 120px;
    padding-bottom: 40px;
    background-color: #eee;

  }

  .fullscreen_bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: 50% 50%;
    background-image: url('http://cleancanvas.herokuapp.com/img/backgrounds/color-splash.jpg');
    background-repeat: repeat;
  }

</style>

