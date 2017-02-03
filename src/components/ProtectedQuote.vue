<template lang="html">
  <div>
    <button class="secret-button" type="button" @click="getProtectedQuote">GET TOP SECRET</button>
    <pre class="secret-pre" v-if="quote">
      {{ quote }}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'ProtectedQuote',
  data () {
    return {
      quote: ''
    }
  },
  methods: {
    getProtectedQuote () {
      this.$getProtectedQuote().then(response => {
        this.quote = response.data
      })
    }
  }
}
</script>

<style lang="css">
.secret-pre {
  border-left: 3px solid #f66;
}
.secret-button {
  background-color: #f66;
}
</style>
