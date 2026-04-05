<script setup lang="ts">
  import type { IProduct, IProductVariant } from '@/types/product'
  import ProductVariant from '@/modules/product/components/ProductVariant.vue'

  defineProps<{
    id: IProduct['id']
    variants: IProductVariant[]
    currentVariant: IProductVariant
  }>()

  const emit = defineEmits(['changeVariant'])
</script>

<template>
  <div
    class="product-variants flex-item flex-row"
    role="group"
    aria-label="Переключатель варианта товара"
  >
    <ProductVariant
      v-for="item in variants"
      :key="`${id}-${item.color}`"
      :current-color="currentVariant.color"
      :color="item.color"
      @click="emit('changeVariant', item)"
    />
  </div>
</template>

<style lang="scss" scoped>
  .product-variants {
    position: relative;
    gap: 8px;
    z-index: 4;
  }
</style>
