<script setup lang="ts">
  import { useCartStore } from '@/modules/cart/stores/cart'
  import { onMounted } from 'vue'

  const cartStore = useCartStore()

  onMounted(() => {
    cartStore.setStore()
  })
</script>

<template>
  <a href="/cart" class="cart-button">
    <img
      src="/icons/cart.svg"
      alt="cart icon"
      loading="lazy"
    />
    <span v-if="cartStore.getTotalQuantity" class="_has">
      {{ cartStore.getTotalQuantity }}
    </span>
  </a>
</template>

<style scoped lang="scss">
  .cart-button {
    position: relative;

    img {
      width: 30px;
      height: 30px;
    }

    ._has {
      position: absolute;
      bottom: 4px;
      right: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 16px;
      min-width: 16px;
      border-radius: 50%;
      font-size: 12px;
      background: var(--color-red);
      color: var(--color-white);
    }
  }
</style>
