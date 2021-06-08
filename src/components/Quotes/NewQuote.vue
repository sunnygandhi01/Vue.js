<template>
  <div class="row">
    <form>
    <div class="col-sm-8 col-sm-offset2 col-xs-12 col-md-6 col-md-offset-3 form-group">
     <label>Quote</label>
     <textarea cols="30" rows="3" class="form-control" v-model="quote"></textarea>
    </div>
    <div class="col-sm-8 col-sm-offset2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button class="btn btn-primary" @click.prevent="createNew"></button>
    </div>
    </form>
  </div>
</template>
<script>
import {eventBus} from '../../main.js'

export default {
  data: function() {
      return {
          quote: ''
      }
  },
  methods: {
      createNew() {
          this.$emit('quoteAdded', this.quote);
          console.log(this.quote);
          this.quote = '';
      }
  }
}
</script>

<style scoped>

</style>