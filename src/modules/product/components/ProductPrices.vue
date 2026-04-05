<script lang="ts" setup>
  import type { IProduct } from '@/types/product'
  import { formatMoney } from '@/utils/format'

  defineProps<{
    price: IProduct['price']
    oldPrice: IProduct['oldPrice']
  }>()
</script>

<template>
  <div class="product-price flex-item flex-row">
    <div class="product-price__full text_l text_medium">
      {{ formatMoney(price) }}
    </div>
    <div class="product-price__old text_m text_medium">
      {{ formatMoney(oldPrice) }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .product-price {
    gap: 10px;
    align-items: center;
    white-space: nowrap;

    &__old {
      color: var(--color-grey);
      text-decoration: line-through;
    }
  }
</style>
