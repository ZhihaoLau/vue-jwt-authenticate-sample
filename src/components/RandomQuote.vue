<template lang="html">
  <div>
    <button type="button" @click="getRandomQuote">GET RANDOM QUOTE</button>
    <pre v-if="quote">
      {{ quote }}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'RandomQuote',
  data () {
    return {
      quote: ''
    }
  },
  methods: {
    getRandomQuote () {
      this.$getRandomQuote().then(response => {
        this.quote = response.data
      })
    }
  }
}
</script>

<style lang="css">
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
}
pre {
  box-sizing: border-box;
  display: block;
  width: 90%;
  margin: 30px auto;
  padding: 10px 10px 10px 20px;
  border-left: 3px solid #CCCCCC;
  overflow: auto;
  white-space:normal;
  text-align: left;
  line-height: 1.5em;
}
</style>
