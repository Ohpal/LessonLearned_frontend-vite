<template>
  <AppHeader />
  <div id="layoutSidenav">
    <AppSider />
    <div id="layoutSidenav_content">
      <main>
        <router-view />
      </main>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import AppHeader from './common/AppHeader.vue'
import AppSider from './common/AppSider.vue'
import AppFooter from './common/AppFooter.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppSider,
    AppFooter,
  },
}
</script>

<style src="./assets/css/AppCommon.css"></style>
