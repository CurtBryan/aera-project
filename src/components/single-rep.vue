<template>
  <div class="single-rep-cont">
    <div class="single-rep-db-cont">
      <div class="heading">
        <h1>{{ info.company }}</h1>
      </div>
      <div class="body">
        <div class="info-side">
          <p class="name">
            {{ info.displayName }}
            <i v-if="info.email === 'chalexn@cox.net'">Ed.D.</i>
          </p>
          <br />
          <p class="label" v-if="info.email === 'chalexn@cox.net'">Chalex Educational Services</p>
          <p class="label" v-if="info.email === 'brad.peters@cox.net'">President of AERA</p>
          <p class="location">{{ info.location }}</p>
          <br />
          <p>
            <span class="label">Phone:</span>
            {{ info.phone }}
          </p>
          <p>
            <span class="label">Fax:</span>
            {{ info.fax }}
          </p>
          <br />
          <p>
            <span class="label">Territory:</span>
            {{ info.territory }}
          </p>
          <br />
          <br />
          <br />
          <img src="https://imgur.com/o1qWOZs.png" @click="printPage" alt="print button" />
        </div>
        <div class="logo-side">
          <h3 class="label">Represents:</h3>
          <br />
          <img :src="info.image" alt="company image" />
          <br />
          <div class="services-list">
            <h4 class="label">Products/Services:</h4>
            <ul v-for="(service, index) in info.services" :key="index">
              <li>{{ service }}</li>
            </ul>
            <br />
            <p class="label">Visit Website:</p>
            <a :href="info.link">{{ info.link }}</a>
            <br />
            <br />
            <p class="email">
              <span class="label">Email:</span>
            </p>
            <a class="email-link" :href="`mailto:` + info.email">{{ info.email }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleRep",
  data() {
    return {
      info: {}
    };
  },
  mounted() {
    const list = this.$store.state.persons;
    const name = this.$route.params.displayName;
    for (let i = 0; i < list.length; i++) {
      if (list[i].displayName === name) {
        this.info = list[i];
      }
    }
  },
  methods: {
    printPage() {
      window.print();
    }
  }
};
</script>

<style scoped>
.single-rep-cont {
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
}
.single-rep-db-cont {
  background-color: white;
  width: 90vw;
  padding: 40px 0 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.heading {
  width: 90%;
  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;
}
h1 {
  width: 50%;
  color: #0070bc;
  font-size: 24px;
}
h3 {
  font-size: 20px;
  width: 50%;
}
.body {
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
}
.info-side {
  width: 33%;
  border-right: 1px solid lightgray;
  padding-top: 10px;
}
.logo-side {
  width: 67%;
  padding-top: 10px;
  padding-left: 10px;
}
li {
  margin: 5px 0;
}
.email-link {
  word-break: break-all;
}
.label,
.name {
  font-size: 18px;
  font-weight: 600;
}
.location {
  width: 165px;
}
img {
  max-width: 300px;
}
.email {
  word-wrap: break-word;
}
i {
  font-style: italic;
}
a {
  color: #0070bc;
}
@media screen and (max-width: 700px) {
  .single-rep-db-cont {
    width: 100%;
  }
}
@media screen and (max-width: 500px) {
  .body {
    flex-direction: column;
    align-items: center;
  }
  .info-side {
    width: 100%;
    border-right: none;
    padding-top: 10px;
  }
  .logo-side {
    width: 100%;
    padding-top: 10px;
    padding-left: 0;
  }
}
</style>