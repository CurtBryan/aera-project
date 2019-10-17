<template>
  <div class="home-page-cont">
    <div class="home-page-db-cont">
      <div class="text-cont">
        <div class="welcome-box box">
          <h2>Welcome</h2>
          <p>To the Arizona Educational Representatives' Association, an organization comprised of educational publishers' sales representatives, education consultants, and associates who provide quality educational products, services and resources to Arizona schools, school districts and other educational establishments.</p>
        </div>
        <div class="mission-box box">
          <h2>Our Mission</h2>
          <p>Is to promote and maintain the highest professional standards among association members and the educational community, provide excellent support before, during and after sales, and share information about educational conferences, exhibits, and other events.</p>
        </div>
        <div class="resources-box box">
          <h2>Resources</h2>
          <ul>
            <li>
              <a href="http://www.azed.gov/" target="_blank">Arizona Department of Education</a>
            </li>
            <li>
              <a href="https://www.azed.gov/azccrs/" target="_blank">AZ Common Core Standards</a>
            </li>
            <li>
              <a
                href="http://www.corestandards.org/"
                target="_blank"
              >Arizona's College and Career Ready Standards</a>
            </li>
            <li>
              <a
                href="https://www.literacyworldwide.org/"
                target="_blank"
              >International Reading Association</a>
            </li>
            <li>
              <a
                href="http://www2.ncte.org/"
                target="_blank"
              >National Council of Teachers of English</a>
            </li>
            <li>
              <a
                href="https://www.nctm.org/"
                target="_blank"
              >National Council of Teachers of Mathematics</a>
            </li>
            <li>
              <a
                href="https://www.mathedleadership.org/"
                target="_blank"
              >National Council of Supervisors of Mathematics</a>
            </li>
            <li>
              <a href="https://parcc-assessment.org/" target="_blank">PARCC</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="person-cont box">
        <h2>Officers</h2>
        <div class="single-person-cont">
          <img src="../assets/img/brad-peters.png" alt="hero image" />
          <div>
            <h3 @click="pushToDetails('Brad Peters')">Brad Peters</h3>
            <p class="i-text">President</p>
          </div>
        </div>
        <div class="single-person-cont">
          <img src="http://aerassoc.org/wpimages/wpda1accd4_06.png" alt="hero image" />
          <div>
            <h3 @click="pushToDetails('Robin McMath')">Robin McMath</h3>
            <p class="i-text">Vice-President</p>
          </div>
        </div>
        <div class="single-person-cont">
          <img src="http://aerassoc.org/wpimages/wpcb48d586_06.png" alt="hero image" />
          <div>
            <h3 @click="pushToDetails('Matt West')">Matt West</h3>
            <p class="i-text">Treasurer</p>
          </div>
        </div>
        <div class="single-person-cont">
          <img src="http://aerassoc.org/wpimages/wp6a4307da_06.png" alt="hero image" />
          <div>
            <h3 @click="pushToDetails('Anne Stagliano')">Anne Stagliano</h3>
            <p class="i-text">Secretary</p>
          </div>
        </div>
        <div class="single-person-cont">
          <img src="http://aerassoc.org/wpimages/wp4f112f57_06.png" alt="hero image" />
          <div>
            <h3 @click="pushToDetails('Kim Peters')">Kim Peters</h3>
            <p class="i-text">Board Member</p>
          </div>
        </div>
        <div class="single-person-cont">
          <img src="http://aerassoc.org/wpimages/wp910ece9f_06.png" alt="hero image" />
          <div>
            <h3 @click="pushToDetails('Tawnya Combe')">Tawnya Combe</h3>
            <p class="i-text">Board Member</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    pushToDetails: function(name) {
      this.$router.push({ name: "SingleRep", params: { displayName: name } });
    }
  }
};
</script>

<style scoped>
.home-page-cont {
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.home-page-db-cont {
  width: 90vw;
  background-color: white;
  display: flex;
}
.box {
  background-color: rgb(231, 229, 229);
  margin: 10px;
  padding: 20px;
}
.text-cont {
  width: 70%;
}
ul {
  list-style-image: url("../assets/img/bullet.png");
}
li {
  font-size: 18px;
  margin-bottom: 10px;
  margin-left: 20px;
}
a:hover {
  color: #0070bc;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: black;
}
.person-cont {
  width: 30%;
}
.single-person-cont {
  display: flex;
  margin: 10px 0;
}
h2 {
  font-size: 24px;
  font-weight: 700;
  color: #0070bc;
  border-bottom: 1px solid darkgray;
  margin-bottom: 5px;
  padding-bottom: 5px;
}
p {
  font-size: 18px;
}
h3 {
  color: #0070bc;
  font-size: 20px;
  font-weight: 600;
  text-decoration: underline;
  margin-bottom: 3px;
}
h3:hover {
  color: #eb9009;
  cursor: pointer;
}
.i-text {
  font-style: italic;
}
@media screen and (max-width: 700px) {
  .home-page-db-cont {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .text-cont {
    width: 95%;
  }
  .person-cont {
    width: 80%;
  }
}
</style>