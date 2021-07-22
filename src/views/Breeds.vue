<template>
  <h1>Breeds</h1>
  <grid 
    :posts="posts" 
  ></grid>
</template>

<script>
import axios from 'axios';
import Grid from '@/components/Grid';

export default {
  components: {
    Grid
  },
  data() {
    return {
      isLoading: false,
      limit: 20,
      pageNumber: 1,
      totalPages: 0,
      posts: []
    }
  },
  methods: {
    async fetchBreeds() {
      this.isLoading = true;
      try {
        const response = await axios.get("https://api.thedogapi.com/v1/breeds", {
          params: {
            limit: this.limit,
            page: this.pageNumber,
          }
        });
        this.totalPages = Math.ceil(response.headers['pagination-count'] / this.limit);
        this.posts = response.data;
      }
      catch(e) {
        console.log("Error", e);
      }
      finally {
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.fetchBreeds();
  }
}
</script>

<style>

</style>