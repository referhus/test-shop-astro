<script setup lang="ts">
  import CartLink from '@/modules/cart/components/CartLink.vue'
  import AppLogo from '@/components/shared/AppLogo.vue'
</script>

<template>
  <header class="header">
    <div class="container flex-row">
      <AppLogo />
      <CartLink />
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    border-bottom: 1px solid var(--color-stroke);

    .container {
      justify-content: space-between;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
</style>
