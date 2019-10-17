<template>
  <div class="header-body">
    <div class="header-body-db-cont">
      <div class="header-links-container">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/represenitives">Represenitives</router-link>
        <p class="nav-link">Companies</p>
        <p class="nav-link">Events</p>
        <p class="nav-link">Contact</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-body {
  width: 100vw;
  display: flex;
  justify-content: center;
}
.header-body-db-cont {
  width: 80vw;
}
.header-links-container {
  width: 100%;
  border-top: 5px solid #c07607;
  border-bottom: 5px solid #c07607;
  background-color: #0070bc;
  display: flex;
  align-content: center;
  text-align: center;
}
.nav-link {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  width: 20%;
  text-overflow: ellipsis;
  color: white;
}
.nav-link:hover {
  background-color: #eb9009;
  color: black;
  cursor: pointer;
}
@media screen and (max-width: 700px) {
  .header-body-db-cont {
    width: 100vw;
  }
}
@media screen and (max-width: 520px) {
  .header-links-container {
    flex-direction: column;
  }

  .nav-link {
    width: 100%;
    border-bottom: 1px solid black;
  }
}
</style>