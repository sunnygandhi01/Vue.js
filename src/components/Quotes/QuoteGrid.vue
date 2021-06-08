<template>
  <div class="row">
      <app-quote v-for="(quote, i) in listOfQuotes" :key="i" :listOfQuotes="listOfQuotes" @click.native="deleteQuote(i)" >
        {{ i }} - {{ quote }}
      </app-quote> 
  </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
  props: ['listOfQuotes'],
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit('quoteDeleted', index)
    }
  }
}
</script>

<style scoped>

</style>