<template>
  <div class="rep-cont">
    <div class="rep-db-cont">
      <div class="header">
        <h1>Search By Companies</h1>
      </div>
      <div class="name-cont">
        <div class="single-name" v-for="(person, index) in persons" :key="index">
          <p
            v-if="person.company !== 'McGraw-Hill Education'"
            @click="pushToDetailPage(index)"
          >{{ person.company }}</p>
        </div>
        <div class="single-name">
          <p @click="pushToDetailPage(10)">{{ persons[10].company }}({{persons[10].displayName}})</p>
        </div>
        <div class="single-name">
          <p @click="pushToDetailPage(11)">{{ persons[11].company }}({{persons[11].displayName}})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Companies",
  data() {
    return {
      persons: []
    };
  },
  created() {
    this.persons = this.$store.state.persons;
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
  width: 100%;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
}
.rep-db-cont {
  width: 90vw;
  height: 500px;
  background: white;
  background-image: url("https://imgur.com/PUljFef.png");
  background-size: cover;
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
  margin: 5px 2px;
}
p {
  font-size: 18px;
}
p:hover {
  cursor: pointer;
  color: #0070bc;
}
h1 {
  color: #0070bc;
  font-size: 24px;
}

@media screen and (max-width: 870px) {
  .name-cont {
    min-height: 250px;
  }
}
@media screen and (max-width: 800px) {
  .name-cont {
    min-height: 250px;
  }
}
@media screen and (max-width: 700px) {
  .rep-db-cont {
    width: 100vw;
    min-height: 800px;
  }
  .name-cont {
    height: 800px;
  }
}
@media screen and (max-width: 500px) {
  .header {
    flex-direction: column;
  }
}
@media screen and (max-width: 374px) {
  .rep-db-cont {
    min-height: 800px;
  }
  .name-cont {
    height: 600px;
  }
}
</style>