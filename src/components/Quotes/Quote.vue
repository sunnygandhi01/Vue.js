<template>
  <div class="col-sm-6 colmd-4 col-lg-3">
      <div class="panel panel-default">
          <div class="panel-body quote">List of Quotes {{ listOfQuotes }}
            
          </div>
          
      </div>
  </div>
</template>

<script>

export default { 
  props: ['listOfQuotes'],
}
</script>

<style scoped>
  .panel-body{
      font-family: 'Arizonia', cursive;
      font-size: 24px;
      color: aquamarine;
  }

  .quote {
      cursor: pointer;
  }

  .quote:hover {
      background-color: blueviolet;
  }
</style>