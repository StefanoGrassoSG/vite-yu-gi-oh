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

  },
  created() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
    .then(response => {
      this.store.cards = response.data.data
      console.log(store.cards)
    }),

    axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
    .then(archetype => {
      this.store.archetype = archetype.data
      console.log(store.archetype)
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

  <MainComponent/>

</template>

<style lang="scss">
@use "assets/scss/main";
</style>
