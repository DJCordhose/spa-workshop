<template>
  <div id="counter">
    <p>Counter: {{ counter }}</p>
    <p>Times 10: {{ times10 }}</p>
    <button v-on:click="subtract">Subtract 1</button>
    <p><input v-model="counter" type="number" ></p>
    <p>
      Details can be found here
      <a
        href="https://v3.vuejs.org/guide/introduction.html"
      >https://v3.vuejs.org/guide/introduction.html</a>. Info on TypeScript support: <a href='https://v3.vuejs.org/guide/typescript-support.html#annotating-props'>https://v3.vuejs.org/guide/typescript-support.html#annotating-props</a>.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Counter",
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  methods: {
    subtract() {
      this.counter--;
    },
  },
  computed:  {
    times10(): number {
      return this.counter * 10;
    },
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: blue;
}
</style>
