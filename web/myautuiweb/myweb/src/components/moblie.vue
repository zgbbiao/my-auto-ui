<template>
  <div>
    <div class="tMain mobile">
    </div>
  </div>
</template>
<script>
  export default {
    name: "moblie"
  }
</script>
<style scoped>
  .mobile {
    width: 360px;
    height: 630px;
    outline: none;
    border: solid 20px #000;
    border-radius: 40px;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    -o-border-radius: 40px;
    -ms-border-radius: 40px;
    border-bottom: solid 80px #000;
    border-top: solid 60px #000;
  }
  .tMain {
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    margin-right: 30px;
  }
</style>
