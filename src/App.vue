<script >
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    HeaderComponent,
    MainComponent
  }
}
</script>

<template>

  <HeaderComponent />

  <MainComponent />

  <footer>
    FOOTER
  </footer>
</template>

<style lang="scss">
@use "assets/scss/main";
</style>
