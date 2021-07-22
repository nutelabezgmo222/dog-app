<template>
  <nav class="nav">
    <div class="nav__item">
      <div class="nav__item-card">
        <img :src="voteTableIcon" alt="vote-table" class="nav__item-icon">
      </div>
      <router-link class="router-link" to="/voting">Voting</router-link>
    </div>
    <div class="nav__item">
      <div class="nav__item-card">
        <img :src="breedsIcon" alt="notebook" class="nav__item-icon">
      </div>
      <router-link class="router-link" to="/breeds">Breeds</router-link>
    </div>
    <div class="nav__item">
      <div class="nav__item-card">
        <img :src="searchIcon" alt="notebook" class="nav__item-icon">
      </div>
      <router-link class="router-link" to="/gallery">Gallery</router-link>
    </div>
    <div class="nav__item">
      <div class="nav__item-card">
        <img :src="voteTableIcon" alt="notebook" class="nav__item-icon">
      </div>
      <router-link class="router-link" to="/">Home</router-link>
    </div>
    <div class="nav__item">
      <div class="nav__item-card">
        <img :src="voteTableIcon" alt="notebook" class="nav__item-icon">
      </div>
      <router-link class="router-link" to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
import voteTableIcon from '@/assets/vote-table.png';
import breedsIcon from '@/assets/pet-breeds.png';
import searchIcon from '@/assets/images-search.png';

export default {
  data() {
    return {
      voteTableIcon,
      breedsIcon,
      searchIcon
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    display: grid;
    grid-template: auto / repeat(3, 120px);
    grid-gap: 15px;
    &__item-card {
      padding: 15px;
      background-color: #B4B7FF;
      border: 4px solid rgba(255, 255, 255, 0.6);
      border-radius: 20px;
      margin-bottom: 10px;
      height: 150px;
    }
    &__item-icon {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
    &__item {
      a {
        font-size: 12px;
      }
      &:nth-child(2n) {
        .nav__item-card {
          background-color: #97EAB9;
        }
      }
      &:nth-child(3n) {
        .nav__item-card {
          background-color: #FFD280;
        }
      }
    }
  }
</style>