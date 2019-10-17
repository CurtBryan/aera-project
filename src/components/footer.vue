<template>
  <div class="footer-body">
    <div class="footer-body-db-cont">
      <div class="footer-link-container">
        <div class="footer-link-heading-container">
          <div>
            <h3>Site Information</h3>
            <div class="direct-link-container">
              <p>Home</p>
              <p>Our Representatives</p>
              <p>Companies We Represent</p>
              <p>Contact Information</p>
            </div>
          </div>
          <div>
            <h3>Event Calendar</h3>
            <div class="direct-link-container">
              <p>News and Events</p>
            </div>
          </div>
          <div>
            <h3>Membership Information</h3>
            <div class="direct-link-container">
              <p>Membership Application Form</p>
              <p>Membership Dues Information</p>
            </div>
          </div>
          <div>
            <h3>Request More Information</h3>
            <div class="direct-link-container">
              <p>Contact Form</p>
            </div>
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
.footer-body {
  width: 100vw;
  max-width: 1200px;
  margin: 5px auto;
  display: flex;
  justify-content: center;
}
.footer-body-db-cont {
  width: 90vw;
  border-top: 5px solid #c07607;
  border-bottom: 5px solid #c07607;
  background-image: url("../assets/img/footer-bg.png");
  background-size: cover;
}
.footer-link-container {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.767);
  color: #eb9009;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.footer-link-heading-container {
  width: 95%;
  display: flex;
  justify-content: space-between;
}
.footer-link-heading-container > div {
  width: 20%;
}
h3 {
  font-weight: 500;
  padding-bottom: 10px;
  border-bottom: 2px solid #c07607;
}
p {
  margin: 10px 0;
  font-size: 14px;
  color: white;
}
p:hover {
  color: #eb9009;
  cursor: pointer;
}
@media screen and (max-width: 700px) {
  .footer-body-db-cont {
    width: 100%;
  }
}
@media screen and (max-width: 500px) {
  .footer-link-heading-container {
    flex-direction: column;
    align-items: center;
  }
  .footer-link-heading-container > div {
    width: 90%;
  }
}
</style>