<template>
  <div class="app__wrapper">
    <static-content></static-content>
    <div class="dynamic-content">
      <searchbar></searchbar>
      <router-view/>
    </div>
  </div>
</template>

<script>
import StaticContent from '@/components/StaticContent';
import Searchbar from '@/components/Searchbar';

export default {
  components: {
    StaticContent,
    Searchbar
  },
}
</script>


<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  #app {
    font-family: Jost, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1D1D1D;
    background-color: #F8F8F7;
  }
  .app__wrapper {
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px 0;
    min-height: 100vh;
    display: flex;
  }
  a {
    text-decoration: none;
  }
  .btn {
    display: block;
    text-transform: uppercase;
    background-color: #fff;
    border-radius: 10px;
    color: #FF868E;
    letter-spacing: 2px;
    text-align: center;
    padding: 10px;
    transition: all .4s ease;
    &:hover {
      color: #FF868E;
      background-color: #FBE0DC;
    }
    &.active {
      color: #FFFFFF;
      background-color: #FF868E;
    }
  }
  .router-link {
    display: block;
    text-transform: uppercase;
    background-color: #fff;
    border-radius: 10px;
    color: #FF868E;
    letter-spacing: 2px;
    text-align: center;
    padding: 10px;
    transition: all .4s ease;
    &:hover {
      color: #FF868E;
      background-color: #FBE0DC;
    }
    &.router-link-active {
      color: #FFFFFF;
      background-color: #ff868e;
    }
  }
  
</style>
