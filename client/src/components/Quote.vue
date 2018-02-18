<template>
  <div id="loading">
    <img width="50px;" id="loading-image" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/09b24e31234507.564a1d23c07b4.gif"
      alt="Loading..." />
    <blockquote class="blockquote text-center">
      <p class="mb-0">I learned that focus is key, not just in running a company, but in your personal life as well</p>
      <footer class="blockquote-footer">Tim Cook
        <cite title="Source Title">QoD</cite>
      </footer>
    </blockquote>
  </div>
</template>

<script>
  export default {
    beforeMount() {
      $(document).ready(function () {
        setTimeout(() => {
          $('#loading').hide();
        }, 5000);
      });
    }
  }

</script>

<style>
  .mb-0 {
    font-size: 1.5em;
  }

  #loading {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: block;
    opacity: 0.90;
    background-color: #f0f0f0;
    z-index: 99;
    text-align: center;
  }

  #loading-image {
    margin-top: 15%;
    top: 100px;
    left: 240px;
    z-index: 100;
  }

</style>

