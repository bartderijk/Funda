<template>
  <section class="section">
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
      <div class="columns">
        <!-- <div class="column is-one-quarter">
          <h3 class="title is-4">{{ data.Adres}}</h3>
          <h3 class="subtitle">{{ data.Plaats}}</h3>
        </div>
        <div class="column is-one-quarter">
          <div>
            <p class="heading ">Prijs</p>
            <p class="title">{{ formattedPrice }}</p>
          </div>
        </div> -->
        <div class="column is-one-quarter">
          <div class="level">
            <div class="level-item">
              <div>
                <h4 class="heading">Adres</h4>
                <h1 class="title">{{ data.Adres }}</h1>
                <h2 class="subtitle is-4">{{ data.Plaats }}</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-quarter">
          <div class="level">
            <div class="level-item">
              <div>
                <h4 class="heading">Prijs</h4>
                <h1 class="title">{{ formattedPrice }}</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-two-quarter">
          <div class="level">
            <div class="level-item has-text-centered">
              <div>
                <h4 class="heading">Bouwjaar</h4>
                <h1 class="title">{{ data.Bouwjaar }}</h1>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <h4 class="heading">>Wonen</h4>
                <h1 class="title">{{ data.WoonOppervlakte }}m²</h1>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <h4 class="heading">Aantal kamers</h4>
                <h1 class="title">{{ data.AantalKamers }}</h1>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <h4 class="heading">Perceel</h4>
                <h1 class="title">{{ data.PerceelOppervlakte }}m²</h1>
              </div>
            </div>
          </div>
        </div>
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
  </section>
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
    formattedPrice() {
      return new Intl.NumberFormat('nl-NL', {
        style: 'currency', currency: 'EUR', notation: 'compact',
      }).format(this.data.Koopprijs);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .image-list li {
    display: inline;
    margin-right: 8px;
  }

  .title:not(.is-spaced) + .subtitle  {
    margin-top: 0rem;
  }
</style>
