<template>
  <header>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/opcion1">Opcion1</router-link></li>
        <li><router-link to="/opcion2">Opcion2</router-link></li>
        <li><router-link to="/opcion3">Opcion3</router-link></li>
      </ul>
    </nav>
  </div>
  </header>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style scoped>
header {
  background-color: #f2f2f2;
  padding: 10px;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
}

nav ul li {
  margin: 0 10px;
}

</style>