<template>
  <div class="container">
    <hr>
    <p>
      This site is created using
      <a href="#">Bootstrap</a>: a modern css framework based on
      <a href="#">Grid</a>
      <br>With
      <i class="animated infinite pulse fa fa-heart"></i>, by
      <a href="https://github.com/jennndol">Luthfi</a>.
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello world!'
      }
    }
  }

</script>

<style scoped>
  hr {
    margin-top: 6em;
  }

  p {
    text-align: center;
  }

  .fa-heart {
    color: brown;
  }

</style>

