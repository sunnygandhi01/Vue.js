export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'bannaa', ' mango', 'Oramnge'],
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterComputedText)
            })
        },
    }

}