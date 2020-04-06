<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" exact active-class="active">
      <a>Home</a>
    </router-link>
    <router-link to="/bar" tag="li" active-class="active">
      <a>Bar graph</a>
    </router-link>
    <router-link to="/pie" tag="li" active-class="active">
      <a>Pie Chart</a>
    </router-link>
  </ul>
</template>
