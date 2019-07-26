<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: "app"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  margin-top: 120px;
  margin-bottom: 20px
}

nav a {
  color: inherit;
  text-decoration: inherit;
  cursor: pointer;
  margin-left: 20px
}

nav a:hover {
  color: aqua
}
</style>
