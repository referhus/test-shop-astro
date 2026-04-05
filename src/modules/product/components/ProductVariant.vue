<script lang="ts" setup>
  import type { IProductVariant } from '@/types/product'
  import { computed } from 'vue'
  import { getActiveClass } from '@/utils/get-classes'

  const props = defineProps<{
    currentColor: IProductVariant['color']
    color: IProductVariant['color']
  }>()

  const getClass = computed(() =>
    getActiveClass(props.currentColor === props.color),
  )
</script>

<template>
  <button
    class="product-variant"
    :class="getClass"
    :aria-label="`Вариант: ${color}`"
  />
</template>

<style lang="scss" scoped>
  .product-variant {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid var(--color-stroke);
    transition: 0.3s;

    &:before {
      content: '';
      z-index: 2;
      position: absolute;
      top: 2px;
      left: 2px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: v-bind(color);
    }

    &._active {
      border-color: var(--color-black);
    }
  }
</style>
