<template>
  <div id="app">
    <TopHero/>
    <ProcessIndicator/>
    <ObjectDetails/>
    <Footer/>
  </div>
</template>

<script>
import TopHero from './components/TopHero.vue';
import ObjectDetails from './components/ObjectDetails.vue';
import ProcessIndicator from './components/ProcessIndicator.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    TopHero,
    ObjectDetails,
    ProcessIndicator,
    Footer,
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
