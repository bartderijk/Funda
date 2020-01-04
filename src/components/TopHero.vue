<template>
  <section  class="hero is-medium is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">{{ msg }}</h1>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'TopHero',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
</style>
