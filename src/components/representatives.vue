<template>
  <div class="rep-cont">
    <div class="rep-db-cont">
      <div class="header">
        <h1>Search By Representatives</h1>
        <div class="button" @click="$router.push({ name: `MemberSignUp` })">Become A Member</div>
      </div>
      <div class="name-cont">
        <div class="single-name" v-for="(person, index) in persons" :key="index">
          <p @click="pushToDetailPage(index)">{{ person.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Represenitives",
  data() {
    return {
      persons: []
    };
  },
  mounted() {
    this.persons = this.$store.state.persons;
    console.log(this.persons);
  },
  methods: {
    pushToDetailPage(index) {
      const name = this.persons[index].displayName;
      this.$router.push({
        name: "SingleRep",
        params: { displayName: name }
      });
    }
  }
};
</script>

<style scoped>
.rep-cont {
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.rep-db-cont {
  width: 90vw;
  height: 400px;
  background: white;
  background-image: url("../assets/img/rep-bg-img.png");
  background-size: auto;
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.header {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 5px;
  border-bottom: 2px solid lightgray;
}
.name-cont {
  width: 90%;
  margin: 10px 0 0 0;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.single-name {
  margin: 5px 0;
}
p {
  font-size: 20px;
}
h1 {
  color: #0070bc;
  font-size: 24px;
}
.button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #0070bc;
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 2px;
}
.button:hover {
  background-color: #eb9009;
  cursor: pointer;
}
@media screen and (max-width: 800px) {
  .name-cont {
    min-height: 250px;
  }
}
@media screen and (max-width: 700px) {
  .rep-db-cont {
    width: 100vw;
    min-height: 400px;
  }
}
@media screen and (max-width: 374px) {
  .rep-db-cont {
    min-height: 600px;
  }
  .name-cont {
    height: 400px;
  }
}
</style>