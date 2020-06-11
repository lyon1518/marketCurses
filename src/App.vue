<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { dom } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

dom.watch()
library.add(faSpinner, faAlignLeft)

export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/styles/styles';
</style>
