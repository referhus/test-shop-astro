<script setup lang="ts">
  import CartLink from '@/modules/cart/components/CartLink.vue'
  import AppLogo from '@/components/shared/AppLogo.vue'
</script>

<template>
  <header class="header container flex-row">
    <AppLogo />
    <CartLink />
  </header>
</template>

<style lang="scss" scoped>
  .header {
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>
