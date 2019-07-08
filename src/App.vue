<template lang="pug">
  v-app#inspire
    v-navigation-drawer(v-model="drawer",clipped,fixed,app)
      v-list(dense)
        v-list-tile(to='/setcategories')
          v-list-tile-action
            v-icon card_giftcard
          v-list-tile-content
            v-list-tile-title 套装
        v-list-tile(to='/partcategories')
          v-list-tile-action
            v-icon category
          v-list-tile-content
            v-list-tile-title 颗粒
    v-toolbar(color="indigo",dark,app,fixed,clipped-left)
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title Lego
    v-content
      v-container(fluid,fill-height)
        v-layout
          v-flex
            router-view
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>
