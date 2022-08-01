<template>
  <div class="about">
    <h1>{{ getStoreText }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: mapState({
    helloMessage: 'helloMessage',
  }),
})
export default class AboutView extends Vue {
  helloMessage!: string;

  public get getStoreText(): string {
    return this.helloMessage;
  }
}
</script>
