<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-md-2 col-12"></div>
      <div class="col-lg-6 col-md-8">
        <div class="card bg-light">
          <div class="card-header">Mode de paiement :</div>
          <div class="card-body">
            <div class="alert alert-success" v-if="nonce">
              Votre paiement a bien été accepté.
            </div>
            <div class="alert alert-danger" v-if="error">
              {{ error }}
            </div>
            <form>
              <div class="form-group">
                <label for="amount">Montant</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                  </div>
                  <input type="number" id="amount" v-model="amount" class="form-control" placeholder="Enter Amount" />
                </div>
              </div>
              <hr />
              <div class="form-group">
                <label class="label_paypal">Numéro de carte</label>
                <div id="creditCardNumber" class="form-control"></div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-7">
                    <label class="label_paypal">Date d'expiration</label>
                    <div id="expireDate" class="form-control"></div>
                  </div>
                  <div class="col-4">
                    <label class="label_paypal">CVV</label>
                    <div id="cvv" class="form-control"></div>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary btn-block" @click.prevent="payWithCreditCard">
                Pay with Credit Card
              </button>
              <hr />
              <div id="paypalButton"></div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-2 col-12"></div>
    </div>
  </div>
</template>
<script>
  import braintree from "braintree-web";
  import paypal from "paypal-checkout";
  export default {
    data() {
      return {
        hostedFieldInstance: false,
        nonce: "",
        error: "",
        amount: "",
      };
    },
    created() {
      // eslint-disable-next-line no-console
      console.log("this.$route.params.total", this.$route.params.total);
      if (this.$route.params.total !== undefined) {
        this.amount = this.$route.params.total;
      } else {
        this.$router.push("/panier");
      }
    },
    methods: {
      payWithCreditCard() {
        if (this.hostedFieldInstance) {
          this.error = "";
          this.nonce = "";
          this.hostedFieldInstance
            .tokenize()
            .then((payload) => {
              // eslint-disable-next-line no-console
              console.log(payload);
              this.nonce = payload.nonce;
            })
            .catch((err) => {
              // eslint-disable-next-line no-console
              console.error(err);
              this.error = err.message;
            });
        }
      },
    },
    mounted() {
      braintree.client
        .create({
          authorization: "sandbox_38gr7jbp_vb92jb8h3pz9h522",
        })
        .then((clientInstance) => {
          let options = {
            client: clientInstance,
            styles: {
              input: {
                "font-size": "20px",
                "font-family": "Open Sans",
              },
            },
            fields: {
              number: {
                selector: "#creditCardNumber",
                placeholder: "•••• •••• •••• ••••",
              },
              cvv: {
                selector: "#cvv",
                placeholder: "•••",
              },
              expirationDate: {
                selector: "#expireDate",
                placeholder: "•• / ••",
              },
            },
          };
          return Promise.all([
            braintree.hostedFields.create(options),
            braintree.paypalCheckout.create({
              client: clientInstance
            }),
          ]);
        })
        .then((instances) => {
          const hostedFieldInstance = instances[0];
          const paypalCheckoutInstance = instances[1];
          // Use hostedFieldInstance to send data to Braintree
          this.hostedFieldInstance = hostedFieldInstance;

          // Setup PayPal Button
          return paypal.Button.render({
              env: "sandbox",
              style: {
                label: "paypal",
                size: "responsive",
                shape: "rect",
              },
              payment: () => {
                return paypalCheckoutInstance.createPayment({
                  flow: "checkout",
                  intent: "sale",
                  amount: parseFloat(this.amount) > 0 ? this.amount : 10,
                  displayName: "Braintree Testing",
                  currency: "USD",
                });
              },
              // eslint-disable-next-line no-unused-vars
              onAuthorize: (data, options) => {
                return paypalCheckoutInstance
                  .tokenizePayment(data)
                  .then((payload) => {
                    // eslint-disable-next-line no-console
                    console.log(payload);
                    this.error = "";
                    this.nonce = payload.nonce;
                  });
              },
              onCancel: (data) => {
                // eslint-disable-next-line no-console
                console.log(data);
                // eslint-disable-next-line no-console
                console.log("Payment Cancelled");
              },
              onError: (err) => {
                // eslint-disable-next-line no-console
                console.error(err);
                this.error =
                  "An error occurred while processing the paypal payment.";
              },
            },
            "#paypalButton"
          );
        })
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {});
    },
  };
</script>
<style>
  .label_paypal {
    font-size: 20px;
  }
</style>