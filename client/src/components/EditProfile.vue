<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="col-md-6 col-md-offset-3 ">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control" id="name" placeholder="Name" v-bind:value="profile.name">
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" class="form-control" id="email" placeholder="email" disabled v-bind:value="profile.email">
            </div>
            <div class="form-group">
              <label>Bio</label>
              <input type="text" class="form-control" id="bio" placeholder="Hodor hodor" v-bind:value="profile.bio">
            </div>
            <button v-on:click="saveUpdate()" class="btn btn-block btn-success">Edit</button>
            <div class="message">
              <div class="alert alert-danger" v-show="errorMessage">{{errorMessage}}</div>
              <div class="alert alert-success" v-show="successMessage">{{successMessage}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footr></footr>
  </div>
</template>

<script>
  import Navbar from "./Navbar.vue";
  import Footer from "./Footer.vue";

  export default {
    components: {
      'navbar': Navbar,
      'footr': Footer,
    },
    data() {
      return {
        profile: {},
        image: `https://api.adorable.io/avatars/285/${localStorage.getItem('name')}.png`,
        successMessage: null,
        errorMessage: null
      }
    },
    created() {
      axios.get(`http://localhost:3000/users/${localStorage.getItem('userId')}`, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(payload => {
          this.profile = payload.data.doc;
        })
        .catch(error => {
          console.log(error);
        });
    },
    methods: {
      saveUpdate() {
        let name = $('#name').val();
        let bio = $('#bio').val();
        axios.put(`http://localhost:3000/users`, {
            name,
            bio
          }, {
            headers: {
              token: localStorage.getItem('token')
            }
          })
          .then(payload => {
            this.profile.name = name;
            this.profile.bio = bio;

            this.successMessage = 'Successsfully updated!';
            this.errorMessage = null;
          })
          .catch(error => {
            this.successMessage = null;
            this.errorMessage = 'Please, make sure your inputs';
          });
      }
    }
  }

</script>

<style scoped>
  hr {
    line-height: 2em;
  }

  .header {
    margin-bottom: 2em;
  }

  .message {
    margin-top: 1em;
  }

</style>

