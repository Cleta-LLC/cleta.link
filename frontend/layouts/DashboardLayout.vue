<template>
  <div class="wrapper">
    <notifications></notifications>

    <CletaSidebar />
    <div class="main-content">
      <CletaNavbar
        :type="$route.name === 'alternative' ? 'light' : 'default'"
      />

      <div @click="$sidebar.displaySidebar(false)">
        <nuxt></nuxt>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`)
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className)
    }, 100)
  }
}

import DashboardNavbar from '~/components/layouts/argon/DashboardNavbar.vue'
import ContentFooter from '~/components/layouts/argon/ContentFooter.vue'
import DashboardContent from '~/components/layouts/argon/Content.vue'
import CletaNavbar from '~/components/cleta/CletaNavbar.vue'
import CletaSidebar from '~/components/cleta/CletaSidebar.vue'

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
    CletaNavbar,
    CletaSidebar
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith('Win')
      if (isWindows) {
        initScrollbar('scrollbar-inner')
      }
    }
  },
  mounted() {
    this.initScrollbar()
  }
}
</script>
<style lang="scss"></style>
