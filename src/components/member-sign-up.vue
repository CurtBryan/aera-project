<template>
  <div class="sign-up-cont">
    <div class="sign-up-db-cont">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd98TaU9ohgwbs9d8HF8E7ZO2txScjzRJ_iwqb19PEQvCUUTw/viewform?embedded=true"
        width="640"
        height="3250"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        onsubmit="window.parent.scrollTo(0, 0);
        return true"
      >Loading…</iframe>
      <div class="payment-wrapper">
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
          <input type="hidden" name="return" value="http://www.aerassoc.org/member-sign-up" />
          <input type="hidden" name="cancel_return" value="Payment Not Complete" />
          <div class="paypal-cont">
            <div class="paypal-header">
              <p>Membership Fee</p>
            </div>
            <p>Price: $60.00</p>
            <button type="submit">Pay Now</button>
          </div>
        </form>
        <form
          id="form_34"
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_self"
          novalidate="novalidate"
        >
          <input type="hidden" name="bn" value="Serif.WebPlus" />
          <input type="hidden" name="cmd" value="_cart" />
          <input type="hidden" name="business" value="aerassoc2016@gmail.com" />
          <input type="hidden" name="item_name" value="Additional Companies" />
          <input type="hidden" name="item_number" value="aeramemco" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="hidden" name="amount" value="60.00" />
          <input type="hidden" name="add" value="1" />
          <input type="hidden" name="quantity" value="1" />
          <input type="hidden" name="no_shipping" value="0" />
          <input type="hidden" name="no_note" value="1" />
          <input type="hidden" name="return" value="http://www.aerassoc.org/member-sign-up" />
          <input type="hidden" name="cancel_return" value="your transaction is not complete" />
          <input type="hidden" name="on0" value="Additional_companies" />
          <input type="hidden" name="option_select0" value="1 Company" />
          <input type="hidden" name="option_amount0" value="60.00" />
          <input type="hidden" name="option_select1" value="2 Companies" />
          <input type="hidden" name="option_amount1" value="120.00" />
          <input type="hidden" name="option_select2" value="3 Companies" />
          <input type="hidden" name="option_amount2" value="180.00" />
          <input type="hidden" name="option_select3" value="4 Companies" />
          <input type="hidden" name="option_amount3" value="240.00" />
          <input type="hidden" name="option_index" value="0" />
          <div class="paypal-cont">
            <div class="paypal-header">
              <p>Additional Companies</p>
            </div>
            <p>Price: $60.00 per Company</p>

            <select name="os0">
              <option value="1 Company">1&nbsp;Company</option>
              <option value="2 Companies">2&nbsp;Companies</option>
              <option value="3 Companies">3&nbsp;Companies</option>
              <option value="4 Companies">4&nbsp;Companies</option>
            </select>
            <button type="submit">Pay Now</button>
          </div>
        </form>
      </div>
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
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
iframe {
  width: 95%;
}
form {
  width: 50%;
  border: 3px solid #0070bc;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
}
.payment-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
select {
  width: 60%;
}
.paypal-cont {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}
.paypal-cont > p,
.paypal-cont > button {
  margin: 10px 0;
}
.paypal-header {
  background-color: rgb(111, 161, 192);
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
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
</style>