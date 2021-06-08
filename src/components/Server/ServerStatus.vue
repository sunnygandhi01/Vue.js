<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <button v-on:click="chnageStatus"> Change status
    </button>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            status: 'Critical'
        }
    },
    methods: {
            changeStatus() {
                this.status = 'Normal'
                console.log(this)
            },
        },
}
</script>

<style lang="scss">

</style>