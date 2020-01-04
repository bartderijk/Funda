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

    <div v-if="hasError" class="message is-warning">
      <div class="message-header">
        <p>Error while getting data</p>
      </div>
      <div class="message-body">
        Looks like something went wrong when we tried to get the data. Please refresh the page, or try again later.
      </div>
    </div>

    <template v-if="hasData">
      <div class="container">
        <section class="columns">
          <div class="column is-one-quarter">
            <h3 class="title is-4">{{ data.Adres}}</h3>
            <h3 class="subtitle">{{ data.Plaats}}</h3>
          </div>
          <div class="column is-one-quarter">
            <div>
              <p class="heading ">Prijs</p>
              <p class="title">{{ data.Koopprijs }}</p>
            </div>
          </div>
          <div class="column is-two-quarter">
          <section class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading ">Bouwjaar</p>
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
        </section>
      </div>

      <hr>

      <div class="columns">
        <div class="column">
            <img :src="data.HoofdFoto" alt="Hoofdfoto">
          </div>
          <div class="column">
            <ul class="image-list">
              <li v-for="image in data['Media-Foto']" :key="image.id">
                <img :src="image" alt="image of the object">
              </li>
            </ul>
          </div>
      </div>
    </template>
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
      'hasError',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .image-list li {
    display: inline;
    margin-right: 8px;
  }
</style>
