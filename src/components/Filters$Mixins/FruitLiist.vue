<template>
  <div class="container">
    <div class="row">
        <input v-model='filterComputedText'> 
     <ul>
         <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
     </ul>
    </div>
  </div>    
</template>

<script>
import { fruitMixin } from './fruitMixin.js'
export default {
    mixins: [fruitMixin]
}
</script>

<style scoped>

</style>