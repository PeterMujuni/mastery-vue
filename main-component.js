const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "green socks",
      brand: 'Vue Mastery',
      image: "./assets/images/socks_green.jpg",
      url: "https://www.petermujuni.dk/",
      inventory: 3,
      onSale: true,
      details: ['50% cotton','30% wool','20% polyester'],
      variants: [
        {id: 2234, color: '#329f68', image: './assets/images/socks_green.jpg', quantity: 50},
        {id: 2235, color: '#455972', image: './assets/images/socks_blue.jpg', quantity: 0}
      ],
      sizes: ['large', 'medium', 'small'],
      cart: 0
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
      this.inventory--;
    },
    updateImage(image) {
      this.image = image
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    }
  },
})