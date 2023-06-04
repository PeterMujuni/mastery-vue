const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
    }
  },
  methods: {
   updateCart(id) {
    this.cart.push(id)
   },
   updateRemoveCart(id) {
    let result = this.cart.filter(product => {
      product !== id
    })

    console.log("result", result);
    // console.log(this.cart.filter((item => {
    //   console.log(id);
    // })));
   },
  },
})