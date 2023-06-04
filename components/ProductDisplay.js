app.component("product-display", {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
        cartLength: {
            type: Number,
        }
    },
  template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">

            <div class="product-image">
                <img 
                    :src="image" 
                    :alt="description" 
                    class="product-image__img" 
                    :class="[!inStock ? 'out-of-stock-img' : '' ]" 
                />
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
                <p v-if="inStock > 10">In Stock</p>
                <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out</p>
                <p v-else>Out of Stock</p>
                <p>Shipping: {{ shipping}}</p>
                <p v-if="onSale">On Sale</p>

                <product-detail :details="details"></product-detail>

                <div class="circle-container">
                    <div
                        v-for="(variant, index) in variants"
                        :key="variant.id"
                        @mouseover="updateVariant(index)"
                        class="color-circle"
                        :style="{backgroundColor: variant.color}"
                    >
                    </div>
                </div>
                <div class="btn-group">
                    <button :disabled="!inStock" class="btn" :class="{disabledButton: !inStock}" @click="addToCart">Add to Cart</button>
                    <button class="btn" @click="removeFromCart">Remove from Cart</button>
                </div>
            </div>
        </div>
    </div>
  `,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      url: "https://www.petermujuni.dk/",
      inventory: 3,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "#329f68",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
          desc: "green socks",
        },
        {
          id: 2235,
          color: "#455972",
          image: "./assets/images/socks_blue.jpg",
          quantity: 3,
          desc: "blue socks",
        },
      ],
      sizes: ["large", "medium", "small"],
      onSale: false,
    };
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    description() {
      return this.variants[this.selectedVariant].desc;
    },
    shipping() {
        if(this.premium) {
            return 'Free'
        }
        return 2.99
    }
  },
});
