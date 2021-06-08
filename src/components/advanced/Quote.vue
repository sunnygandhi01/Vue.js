<template>
    <div class="title">
      <slot name="title">

    </slot>
    <hr>
    <slot name="Quote">

    </slot>
    </div>
</template>

<script>
export default {
    props: {
            parentQuote: {
                type: String,
            },
        },
}
</script>

<style scoped>
 div {
     border: 1px solid #ccc;
     box-shadow: 1px 1px 2px black;
     padding: 30px;
     border: 30px auto;
     text-align: center;
 }
</style>