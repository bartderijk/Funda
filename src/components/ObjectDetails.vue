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
                <h4 class="heading">Wonen</h4>
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
              <li v-for="(image, index) in galleryImages" :key="image.id">
                <img v-lazy="image.thumb" @click="openGallery(index)" alt="image of the object">
              </li>
            </ul>
            <LightBox
              :images="galleryImages"
              ref="lightbox"
              :show-caption="true"
              :show-light-box="false"
            >
            </LightBox>
          </div>
      </div>
    </template>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import LightBox from 'vue-image-lightbox';

export default {
  name: 'ObjectDetails',
  components: {
    LightBox,
  },
  computed: {
    ...mapGetters([
      'hasData',
      'hasMissingApiKey',
    ]),
    ...mapState([
      'data',
      'hasError',
    ]),
    galleryImages() {
      // format the data to bitesize chunks for lightbox
      const media = this.data.Media;
      const result = media.filter((item) => {
        // filter out images we cant work with
        if (item.MediaItems
            && item.MediaItems[2]
            && item.MediaItems[0]
            && item.MediaItems[0].Url.indexOf('xml') === -1
            && item.MediaItems[2].Url.indexOf('xml') === -1) {
          return true;
        }
        return false;
      })
        .map(item => ({
          thumb: item.MediaItems[0].Url,
          src: item.MediaItems[2].Url,
        }));
      return result;
    },
    formattedPrice() {
      // its nice to format the numbers, in this case NumberFormat makes it easy
      return new Intl.NumberFormat('nl-NL', {
        style: 'currency', currency: 'EUR',
      }).format(this.data.Koopprijs);
    },
  },
  methods: {
    openGallery(index) {
      // this should call the right lightbox image
      this.$refs.lightbox.showImage(index);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .image-list li {
    display: inline;
    margin-right: 8px;
    cursor: pointer;
  }

  .title:not(.is-spaced) + .subtitle  {
    margin-top: 0rem;
  }
</style>
