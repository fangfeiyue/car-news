<template>
  <main-header />
  <bread-crumbs />
  <micro-body />
  <global-footer />
</template>
<script setup>
import MainHeader from '@/components/Header'
import GlobalFooter from '@/components/Footer/index.vue'
import MicroBody from '@/view/micro-body.vue'
import BreadCrumbs from '@/components/BreadCrumbs'
</script>
<style>
html, body, #micro_web_main_app {
  width: 100%;
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
