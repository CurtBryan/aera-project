<template>
  <div class="header-body">
    <div class="header-body-db-cont">
      <div class="header-links-container">
        <p class="nav-link">Home</p>
        <p class="nav-link">Represenitives</p>
        <p class="nav-link">Companies</p>
        <p class="nav-link">Calender Events</p>
        <p class="nav-link">Contact</p>
        <div class="search-container">
          <input />
          <button>search</button>
        </div>
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
  border-top: 5px solid #c07607;
  border-bottom: 5px solid #c07607;
  background-color: #0070bc;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.nav-link,
.search-container {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
}
.nav-link {
  width: 15%;
  color: white;
}
.nav-link:hover {
  background-color: #eb9009;
  color: black;
  cursor: pointer;
}
.search-container {
  width: 25%;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
}
</style>