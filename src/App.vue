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
};
</script>

<style lang="scss">
</style>
