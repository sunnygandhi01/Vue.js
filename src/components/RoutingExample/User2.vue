<template>
 <div>
  <h1>The User-2 Main Page</h1>
  <hr>
  <button class="btn btn-primary" @class="navigateHome">Go to Home.</button>
 </div>
</template>

<script>
export default {
    methods:{
        navigateHome() {
                this.$router.push('/')
            }
    },
    watch: {
        '$route'(to, from) {
            this.id = to.from.id
        }
    }
}
</script>