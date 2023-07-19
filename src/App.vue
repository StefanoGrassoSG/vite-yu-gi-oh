<script >
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import axios from 'axios';
import {store} from './store'

export default {
  data() {
    return {
        store
    }
  },
  methods: {
    searchType() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0', {
        params: {
          archetype : this.store.searchText
        }
      })
      .then(filter => {
        this.store.cards = filter.data.data
      })
    }
  },
  created() {
    this.searchType(),

    axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
    .then(archetype => {
      this.store.archetype = archetype.data
    })
  },
  components: {
    HeaderComponent,
    MainComponent
  }
}
</script>

<template>

  <HeaderComponent />

  <MainComponent @search="searchType()"/>

</template>

<style lang="scss">
@use "assets/scss/main";
</style>
