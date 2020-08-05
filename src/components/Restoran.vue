<template>
  <div class="container">
    <router-link class="menu-item" v-bind:to="{ path: `/${restoran}/` }">About</router-link>
    <router-link class="menu-item" v-bind:to="{ path: `/${restoran}/reviews` }">Reviews</router-link>
    <router-link class="menu-item" v-bind:to="{ path: `/${restoran}/images` }">Images</router-link>
    <h1>Página de Restoran</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Restoran",
  props: {
    restoran: String
  }
};
</script>

<style scoped>
.menu-item {
  margin: 10px 15px;
}
</style>