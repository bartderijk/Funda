<template>
    <div v-if="isLoading" class="container has-text-centered">
        <span class="icon is-large has-text-primary">
        <i class="fas fa-spinner fa-pulse fa-3x"></i>
        </span>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProcessIndicator',
  computed: {
    ...mapState(['isLoading']),
  },
};
</script>

<style scoped>
  .container {
    margin-top: 16px;
  }
</style>
