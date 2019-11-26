
<template>
  <div class="hero-body">
    <div class="hero-body-db-cont">
      <img src="https://i.imgur.com/JMwPQLE.png" alt="hero image" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-body {
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.hero-body-db-cont {
  width: 90vw;
}
img {
  width: 100%;
}
@media screen and (max-width: 700px) {
  .hero-body-db-cont {
    width: 100vw;
  }
}
</style>