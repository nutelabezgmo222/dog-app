<template>
  <div class="grid">
    <div
      v-for="(post) in posts" 
      :key="post.id" 
      class="post"
      >
      <img :src="post.url" :alt="post.name">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: [],
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 140px;
    grid-auto-flow: dense;
  }
  
</style>