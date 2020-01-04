<template>
  <div id="app">
    <TopHero/>
    <ObjectDetails/>
  </div>
</template>

<script>
import TopHero from './components/TopHero.vue';
import ObjectDetails from './components/ObjectDetails.vue';

export default {
  name: 'app',
  components: {
    TopHero,
    ObjectDetails,
  },
  mounted() {
    // Mounted is part of the Vue instance lifecycle, this hook gets
    // called after the instance has been mounted.
    // Soon as this is done, we'll haul in the data with getData
    this.$store.dispatch('getData');
  },
};
</script>

<style lang="scss">
</style>
