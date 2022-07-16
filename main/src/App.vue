<template>
  <main-header v-if="header.headerStatus.value" />
  <span v-if="header.headerStatus.value">hello world</span>
  2{{header.headerStatus.value}}1
  <bread-crumbs />
  <micro-body />
  <global-footer />
</template>
<script setup>
import MainHeader from '@/components/Header'
import GlobalFooter from '@/components/Footer/index.vue'
import MicroBody from '@/view/micro-body.vue'
import BreadCrumbs from '@/components/BreadCrumbs'
import { header } from './store/index'
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
