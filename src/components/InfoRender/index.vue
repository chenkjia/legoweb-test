<template lang="pug">
  div {{ placeholder }}
</template>
<script>
export default {
  name: 'infoRender',
  props: {
    placeholder: {
      type: String,
      default: '-'
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
