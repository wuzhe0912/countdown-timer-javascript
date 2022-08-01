<template>
  <div class="hello">
    <h1>{{ titleText }}</h1>
    <h3>{{ fullName }}</h3>
    <div>
      <h4>{{ counter }}</h4>
      <button @click="incrementCounter()">Add Number</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  // data
  titleText = 'Hello World!';
  firstName = 'Vue.js';
  secondName = 'TypeScript';
  counter = 0;

  // mounted
  mounted() {
    console.log('mounted');
  }

  // computed
  get fullName(): string {
    return `${this.firstName} with ${this.secondName}`;
  }

  // methods
  incrementCounter(): void {
    this.counter++;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
