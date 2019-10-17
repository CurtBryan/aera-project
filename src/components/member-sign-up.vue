<template>
  <div class="sign-up-cont">
    <div class="sign-up-db-cont">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd98TaU9ohgwbs9d8HF8E7ZO2txScjzRJ_iwqb19PEQvCUUTw/viewform?embedded=true"
        width="100%"
        height="2953"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >Loading…</iframe>
      <div class="payment-heading">
        <h1>Membership Payment (Paypal or Credit Card)</h1>
      </div>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_self">
        <input type="hidden" name="bn" value="Serif.WebPlus" />
        <input type="hidden" name="cmd" value="_cart" />
        <input type="hidden" name="business" value="aerassoc2016@gmail.com" />
        <input type="hidden" name="item_name" value="AERA Membership" />
        <input type="hidden" name="item_number" value="aeramem" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="hidden" name="amount" value="60.00" />
        <input type="hidden" name="add" value="1" />
        <input type="hidden" name="quantity" value="1" />
        <input type="hidden" name="no_shipping" value="0" />
        <input type="hidden" name="no_note" value="1" />
        <input type="hidden" name="return" value="http://www.aerassoc.org/membership_form.html" />
        <input type="hidden" name="cancel_return" value="Payment Not Complete" />
        <div class="paypal-cont">
          <div class="paypal-header">
            <p>Membership Fee</p>
          </div>
          <p>Price: $60.00</p>
          <button type="submit">Pay Now</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberSignUp"
};
</script>

<style scoped>
.sign-up-cont {
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sign-up-db-cont {
  width: 90vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
form {
  width: 50%;
  border: 3px solid #0070bc;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
}
.paypal-cont {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.paypal-cont > p,
.paypal-cont > button {
  margin: 10px 0;
}
.paypal-header {
  background-color: rgb(111, 161, 192);
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
}
button {
  background-color: #0070bc;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 4px 2px;
  border-radius: 10px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
}
button:hover {
  background-color: #eb9009;
  color: black;
  cursor: pointer;
}
.payment-heading {
  margin-bottom: 10px;
  border-bottom: 1px solid darkgray;
  width: 90%;
}
h1 {
  color: #0070bc;
  padding-bottom: 5px;
  font-size: 20px;
}
@media screen and (max-width: 700px) {
  .sign-up-db-cont {
    width: 100%;
  }
}
@media screen and (max-width: 425px) {
}
</style>