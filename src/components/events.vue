<template>
  <div class="events-cont">
    <div class="events-db-cont">
      <h1>Events</h1>
      <h2>No events for 2019 listed. Please visit again for updates.</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Events"
};
</script>

<style scoped>
.events-cont {
  width: 100vw;
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}
.events-db-cont {
  background-color: white;
  width: 90vw;
  height: 500px;
}
h1 {
  text-align: center;
  margin: 20px 0;
  font-size: 32px;
}
h2 {
  text-align: center;
  margin: 20px 0;
}
@media screen and (max-width: 700px) {
  .events-db-cont {
    width: 100%;
  }
}
</style>