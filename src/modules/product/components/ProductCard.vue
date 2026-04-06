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
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s;
  cursor: pointer;

  .card-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: pointer;
  }

  &__image {
    position: relative;
    width: 100%;

    img {
      aspect-ratio: 323 / 400;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-sale {
    position: absolute;
    bottom: 16px;
    left: 16px;
  }

  &__description {
    opacity: 0.5;
    -webkit-line-clamp: var(--line);
    line-clamp: var(--line);
  }

  &._horizontal {
    display: grid;
    gap: 32px;
    grid-template-areas:
      'area-image area-content area-price'
      'area-image area-variants area-button';
    grid-template-columns: 164px 1fr 152px;
    grid-template-rows: 1fr 56px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--color-stroke);

    @media (max-width: 600px) {
      grid-template-areas:
        'area-image area-content'
        'area-image area-price'
        '. area-variants'
        '. area-button';
      grid-template-columns: 100px 1fr;
      grid-template-rows: 1fr 28px 40px 40px;
      gap: 8px;
      padding-bottom: 16px;
    }

    .product-card__image {
      grid-area: area-image;

      img {
        aspect-ratio: 41 / 52;

        @media (max-width: 600px) {
          aspect-ratio: 100 / 127;
          margin-right: 8px;
        }
      }
    }

    .product-card__title {
      @media (max-width: 600px) {
        font-size: 16px;
        line-height: 24px;
      }
    }

    .product-card__description {
      --line: 2;

      @media (max-width: 600px) {
        --line: 3;

        font-size: 14px;
        line-height: 20px;
      }
    }

    .product-card__content {
      grid-area: area-content;
      gap: 8px;
      max-width: 530px;

      @media (max-width: 600px) {
        gap: 0;
      }
    }

    .product-price {
      grid-area: area-price;
      flex-direction: column;
      align-items: flex-end;
      margin-left: auto;

      :deep(.product-price__full) {
        font-size: 28px;
      }

      @media (max-width: 600px) {
        flex-direction: row;
        align-items: center;
        margin-left: 0;
        margin-bottom: 4px;

        :deep(.product-price__full) {
          font-size: 18px;
        }
      }
    }

    .product-button {
      grid-area: area-button;

      @media (max-width: 600px) {
        max-width: 141px;
      }
    }

    .product-variants {
      grid-area: area-variants;
      align-items: self-end;

      @media (max-width: 600px) {
        align-items: self-start;
      }
    }

    .product-sale {
      @media (max-width: 600px) {
        display: none;
      }
    }
  }

  &._vertical {
    .product-card__image {
      img {
        aspect-ratio: 323 / 400;
      }
    }

    .product-card__content {
      gap: 4px;
    }

    .product-card__description {
      --line: 3;

      @media (max-width: 920px) {
        --line: 2;
      }
    }
  }
}
</style>
