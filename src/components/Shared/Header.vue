<template>
  <div class="row">
   <!-- <ul class="nav nav-pills">
       <li role="presentation"><router-link to="/">Home</router-link></li>
       <li role="presentation"><router-link to="/user">User</router-link></li>
   </ul> -->
   <ul class="nav nav-pills">
       <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
       <router-link to="/user/10" tag="li" active-class="active"><a>User</a></router-link>
   </ul>

  <div class="col-xs-12 col-sm-6">
      <p>Server Status </p>
  </div>
  </div>
</template>

<script>
</script>
