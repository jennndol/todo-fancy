<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <center>
        <img v-bind:src="image" name="aboutme" width="140" height="140" border="0" class="img-circle">
        <h3 class="media-heading">{{ profile.name }}
          <small>{{ profile.email }}</small>
        </h3>
        <div class="divider" v-show="profile.labels.length>0">
          <span>
            <strong>Skills: </strong>
          </span>

          <span v-for="skill in profile.labels" :key="skill" class="label label-info skill">{{ skill }}</span>
        </div>
      </center>
      <hr>
      <center>
        <p class="text-left">
          <strong>Bio: </strong>
          <br> {{profile.bio}}
        </p>
        <br>
      </center>
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
        image: `https://api.adorable.io/avatars/285/${localStorage.getItem('name')}.png`,
        profile: {}
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
    beforeMount() {
      $(document).ready(function () {
        if (!localStorage.getItem('token')) {
          window.location.href = '/#/login';
          location.reload();
        }
      });
    }
  }

</script>

<style scoped>
  .skill {
    padding: 1em;
    margin-left: 0.5em;
  }

  .divider {
    margin-top: 1em;
  }

</style>

