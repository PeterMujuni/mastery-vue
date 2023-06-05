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
    let itemIndex = this.cart.indexOf(id)

    if(itemIndex !== -1) {
      this.cart.splice(this.cart.indexOf(id), 1)
    }
   },
  },
})