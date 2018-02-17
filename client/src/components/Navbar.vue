<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
          aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">TODO FANCY</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li class="active">
            <a href="/">Home</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <img v-bind:src="image" class="profile"> {{ name }}
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Profil</a>
              </li>
              <li role="separator" class="divider"></li>
              <li>
                <a href="#">Edit Profil</a>
              </li>
              <li>
                <a onclick="logout()">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
  export default {
    data() {
      return {
        name: localStorage.getItem('name'),
        image: `https://api.adorable.io/avatars/285/${localStorage.getItem('name')}.png`
      }
    }
  }

</script>

<style scoped>

  .profile {
    width: 18px;
    border-radius: 50%;
  }

</style>

