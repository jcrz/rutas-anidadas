<template>
  <div class="container">
      <h1>Categoria {{ nombre_categoria }}</h1>
  </div>
</template>

<script>
export default {
    name: 'Categoria',
    props: {
      nombre_categoria: String
    }
}
</script>

<style scoped>

</style>