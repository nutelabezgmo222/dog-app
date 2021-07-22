<template>
  <div class="static">
    <span class="logo"></span>
    <h1 class="static__header">Hi!</h1>
    <h3 class="static__subheader">Welcome to MSI 2021</h3>
    <p class="static__hint">Lets start using The Dogs API</p>
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  components: {
    Navbar
  },
}
</script>

<style lang="scss" scoped>
  .logo {
    display: block;
    width: 110px;
    height: 30px;
    margin-bottom: 10px;
    background: center / contain no-repeat url("../assets/logo.png");
  }
  .static {
    position: sticky;
    flex-basis: 50%;
    align-self: flex-start;
    top: 20px;
    &__header {
      font-size: 32px;
      line-height: 35px;
      margin-bottom: 10px;
    }
    &__subheader {
      font-size: 20px;
      line-height: 29px;
      margin-bottom: 10px;
      color: #8C8C8C;
    }
    &__hint {
      font-size: 20px;
      line-height: 29px;
      margin-bottom: 20px;
      font-weight: 600;
    }
  }
</style>