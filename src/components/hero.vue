<template>
  <div class="hero-body">
    <div class="hero-body-db-cont">
      <img src="../assets/img/hero-new-bg.png" alt="hero image" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-body {
  width: 100vw;
  display: flex;
  justify-content: center;
}
.hero-body-db-cont {
  width: 80vw;
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