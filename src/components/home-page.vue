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
            <li>Arizona Department of Education</li>
            <li>AZ Common Core Standards</li>
            <li>Arizona Reading Association</li>
            <li>Arizona's College and Career Ready Standards</li>
            <li>International Reading Association</li>
            <li>National Council of Teachers of English</li>
            <li>National Council of Teachers of Mathematics</li>
            <li>National Council of Supervisors of Mathematics</li>
            <li>PARCC</li>
          </ul>
        </div>
      </div>
      <div class="person-cont box">
        <h2>Officers</h2>
        <div class="single-person-cont">
          <img src="../assets/img/brad-peters.png" alt="hero image" />
          <div>
            <h3>Brad Peters</h3>
            <p class="i-text">President</p>
          </div>
        </div>
        <div class="single-person-cont">
          <img src="../assets/img/brad-peters.png" alt="hero image" />
          <div>
            <h3>Robin McMath</h3>
            <p class="i-text">Vice-President</p>
          </div>
        </div>
        <div class="single-person-cont">
          <img src="../assets/img/brad-peters.png" alt="hero image" />
          <div>
            <h3>Matt West</h3>
            <p class="i-text">Treasurer</p>
          </div>
        </div>
        <div class="single-person-cont">
          <img src="../assets/img/brad-peters.png" alt="hero image" />
          <div>
            <h3>Anne Stagliano</h3>
            <p class="i-text">Secretary</p>
          </div>
        </div>
        <div class="single-person-cont">
          <img src="../assets/img/brad-peters.png" alt="hero image" />
          <div>
            <h3>Kim Peters</h3>
            <p class="i-text">Board Member</p>
          </div>
        </div>
        <div class="single-person-cont">
          <img src="../assets/img/brad-peters.png" alt="hero image" />
          <div>
            <h3>Tawnya Combe</h3>
            <p class="i-text">Board Member</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-page-cont {
  width: 100vw;
  display: flex;
  justify-content: center;
}
.home-page-db-cont {
  width: 80vw;
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
}
li:hover {
  color: #0070bc;
  cursor: pointer;
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
.i-text {
  font-style: italic;
}
</style>