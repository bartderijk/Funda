<template>
  <div class="container">
    <div v-if="hasMissingApiKey" class="message is-warning">
      <div class="message-header">
        <p>Missing API key</p>
      </div>
      <div class="message-body">
        Looks like you're missing the <code>apiKey</code>. Add it in <code>config.js</code> in the root of the project.
      </div>
    </div>
    <section v-if="hasData" class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Bouwjaar</p>
          <p class="title">{{ data.Bouwjaar }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Wonen</p>
          <p class="title">{{ data.WoonOppervlakte }}m²</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Aantal kamers</p>
          <p class="title">{{ data.AantalKamers }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Perceel</p>
          <p class="title">{{ data.PerceelOppervlakte }}m²</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'ObjectDetails',
  computed: {
    ...mapGetters([
      'hasData',
      'hasMissingApiKey',
    ]),
    ...mapState([
      'data',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .container {
        margin-top: 16px;
    }
</style>
