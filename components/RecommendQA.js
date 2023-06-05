app.component('recommend-qa', {
    template:
    /*html*/
    `
    <fieldset class="recommend-container">
    {{checkedAnswer}}
        <legend>Would you recommend this product:</legend>

        <div>
            <input type="radio" id="yes" name="recommend" value="yes" checked v-model="checkedAnswer">
            <label for="yes">Yes</label>
        </div>

        <div>
            <input type="radio" id="no" name="recommend" value="no" v-model="checkedAnswer">
            <label for="no">No</label>
        </div>
    </fieldset>
    `,
    data() {
        return {
            checkedAnswer: {
                type: String,
            }
        }
    }
})