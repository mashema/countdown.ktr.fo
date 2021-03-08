<template>
  <div id="app">
    <CountDown/>
  </div>
</template>

<script>

import CountDown from './components/CountDown.vue'


export default {
  name: 'App',
  components: {
    CountDown
  }
}
</script>

<style>

@font-face {
  font-family: 'DS-Digital';
  src: url('./assets/fonts/DS-Digital-Bold.woff2') format('woff2'),
  url('./assets/fonts/DS-Digital-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}


/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
