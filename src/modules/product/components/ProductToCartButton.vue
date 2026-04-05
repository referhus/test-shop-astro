<script setup lang="ts">
  import AppButton from '@/components/shared/AppButton.vue'
  import { useCartStore } from '@/modules/cart/stores/cart'
  import { computed, ref, onMounted } from 'vue'
  import type { IProduct, IProductVariant } from '@/types/product'

  const props = defineProps<{
    product: IProduct
    currentVariant: IProductVariant
  }>()

  const isLoading = ref(true)

  onMounted(() => {
    isLoading.value = false
  })

  const cartStore = useCartStore()

  const getProductInCartIndex = computed(() => cartStore.getProductInCartIndex(props.product.id))

  const isVariantInCart = computed(
    () =>
        cartStore.hasProductInCart(props.product.id) &&
      cartStore.cart[getProductInCartIndex.value]?.color ===
        props.currentVariant.color,
  )

  const btnText = computed(() => {
    if (isLoading.value)
      return 'Загрузка...'


    return isVariantInCart.value ? 'Remove' : 'Add To Cart'
  })

  function handlerClick() {
    if (!isVariantInCart.value)
      cartStore.addToCart(props.product, props.currentVariant)
    else cartStore.removeFromCart(props.product.id)
  }
</script>

<template>
  <AppButton class="product-button" @click="handlerClick">
    {{ btnText }}
  </AppButton>
</template>

<style lang="scss" scoped>
  @mixin button--showed {
    opacity: 1;
    z-index: 5;
  }

  .product-card {
    @media (hover: hover) {
      &:hover {
        .product-button.app-button {
          @include button--showed;
        }
      }
    }

    &._horizontal {
      .product-button.app-button {
        @include button--showed;
      }
    }
  }

  .product-button.app-button {
    opacity: 0;
    transition: 0.3s;
    z-index: 0;
    margin-top: 8px;

    &:focus-visible {
      @include button--showed;
    }

    @media (max-width: 920px) {
      @include button--showed;

      margin-top: 0;
    }
  }
</style>
