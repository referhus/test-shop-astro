<script lang="ts" setup>
  import type { IProduct } from '@/types/product'
  import ProductPrices from '@/modules/product/components/ProductPrices.vue'
  import { useProductVariant } from '@/modules/product/composables/useProductVariant'
  import ProductVariantsList from '@/modules/product/components/ProductVariantsList.vue'
  import ProductToCartButton from '@/modules/product/components/ProductToCartButton.vue'
  import {
    cardOrientationsEnum,
    type ComponentCardOrientationsTypes,
  } from '@/components/shared/view-switch/types'
  import { computed } from 'vue'
  import ProductSale from '@/modules/product/components/ProductSale.vue'

  const props = defineProps<{
    product: IProduct
    type: ComponentCardOrientationsTypes
  }>()

  const { currentVariant, changeVariant } = useProductVariant(
    props.product.variants,
  )

  const getTitleClass = computed(() =>
    props.type === cardOrientationsEnum.vertical ? 'text_l' : 'text_xl',
  )
  const getDescClass = computed(() =>
    props.type === cardOrientationsEnum.vertical ? 'text_m' : 'text_l',
  )
</script>

<template>
  <article class="product-card" :class="`_${type}`">
    <a href="/#" class="card-link" />
    <div class="product-card__image">
      <img :src="product.image" :alt="product.name" loading="lazy" />
      <ProductSale />
    </div>
    <div class="product-card__content flex-item">
      <div
        class="product-card__title text_medium text-ellipsis-1"
        :class="getTitleClass"
      >
        {{ product.name }}
      </div>
      <div
        class="product-card__description text-ellipsis"
        :class="getDescClass"
      >
        {{ product.description }}
      </div>
    </div>
    <ProductVariantsList
      :id="product.id"
      :variants="product.variants"
      :current-variant="currentVariant"
      @change-variant="changeVariant"
    />
    <ProductPrices
      :price="currentVariant.price"
      :old-price="currentVariant.oldPrice"
    />
    <ProductToCartButton :product="product" :current-variant="currentVariant" />
  </article>
</template>

<style lang="scss" scoped>
  @use '@/assets/scss/components/product-card' as *;
</style>
