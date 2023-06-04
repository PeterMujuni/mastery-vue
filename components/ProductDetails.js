app.component('product-detail', {
    props: {
        details: {
            type: Array,
        },
    },
    template:
    /*html*/
    `
    <ul class="details-container">
        <li v-for="detail in details">{{ detail }}</li>
    </ul>
    `
})