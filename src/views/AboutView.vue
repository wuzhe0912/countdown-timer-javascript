<template>
  <div class="about">
    <h1>{{ getStoreText }}</h1>
    <section>
      <p>{{ user.username }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.lastLogin }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: mapState({
    helloMessage: 'helloMessage',
    user: 'user',
  }),
})
export default class AboutView extends Vue {
  helloMessage!: string;

  public get getStoreText(): string {
    return this.helloMessage;
  }
}
</script>
