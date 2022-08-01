<template>
  <div class="about">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class AboutView extends Vue {
  msg = 'About';
}
</script>
