<template>
  <div>
    <loading></loading>
    <div id="fullscreen_bg" class="fullscreen_bg" />
    <div class="container">
      <div class="row center-block">
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default">
            <div class="panel-heading">
              <strong>Register</strong>
            </div>
            <div class="panel-body">
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" id="name" placeholder="Name">
              </div>
              <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Email">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
              </div>
              <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" class="form-control" id="confirm-password" placeholder="Confirm Password">
              </div>
              <button v-on:click="register" class="btn btn-success btn-block">Register</button>
              <div class="message">
                <div class="alert alert-danger" v-show="errorMessage">{{errorMessage}}</div>
                <div class="alert alert-success" v-show="successMessage">{{successMessage}}</div>
              </div>
            </div>
            <div class="panel-footer">
              <router-link to="login">Login here</router-link>
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
        title: 'Register Page!',
        successMessage: null,
        errorMessage: null
      }
    },
    beforeMount: function () {
      if (localStorage.getItem('token')) {
        this.$router.push({name:'home'});
      }
    },
    methods: {
      register() {
        let name = $('#name').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let confirmPassword = $('#confirm-password').val();
        if (password == confirmPassword) {
          axios.post('http://35.198.255.146:3000/auth/register', {
              name,
              email,
              password
            })
            .then(payload => {
              this.successMessage = 'Successsfully created!'
              this.errorMessage = null
            })
            .catch(error => {
              this.errorMessage = 'Please, make sure your inputs'
            });
        }
      }
    }
  }

</script>

<style scoped>
  .message {
    margin-top: 1em;
  }

  .center-block {
    margin-top: 15%;
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

