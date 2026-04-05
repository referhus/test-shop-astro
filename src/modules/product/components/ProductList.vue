<script setup lang="ts">
  import ProductCard from './ProductCard.vue'
  import type { IProduct } from '@/types/product'
  import ViewSwitch from '@/components/shared/view-switch/ViewSwitch.vue'
  import { useCardsView } from '@/components/shared/view-switch/useViewSwitch'
  import { useCartStore } from '@/modules/cart/stores/cart'
  import { useProducts } from '@/modules/product/composables/useProducts'
  import { onMounted } from 'vue'

  const props = defineProps<{
    initialProducts: IProduct[]
  }>()

  const cartStore = useCartStore()
  const { products, setProducts } = useProducts()

  setProducts(props.initialProducts)

  onMounted(() => {
    cartStore.setStore()
  })

  const cardsView = useCardsView()
</script>

<template>
  <div class="product-list" :class="cardsView.getCardsView.value">
    <ViewSwitch
      :active="cardsView.activeCardsView.value"
      @change-view="cardsView.changeCardsView"
    />
    <ProductCard
      v-for="product in products"
      :key="`product-${product.id}`"
      :product="product"
      :type="cardsView.cardType.value"
    />
  </div>
</template>

<style lang="scss" scoped>
  .product-list {
    position: relative;
    gap: 24px;

    @media (max-width: 920px) {
      gap: 16px;
    }

    &._grid-view {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      @media (max-width: 920px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &._list-view {
      display: flex;
      flex-direction: column;
    }

    .view-switch {
      position: absolute;
      top: -60px;
      right: 0;
    }
  }
</style>
