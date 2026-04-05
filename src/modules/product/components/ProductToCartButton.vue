<script setup lang="ts">
  import AppButton from '@/components/shared/AppButton.vue'
  import { useCartStore } from '@/modules/cart/stores/cart'
  import { computed, ref, onMounted } from 'vue'
  import type { ICartProduct, IProduct, IProductVariant } from '@/types/product'

  const props = defineProps<{
    product: IProduct
    currentVariant: IProductVariant
  }>()

  const isLoading = ref(true)

  onMounted(() => {
    isLoading.value = false
  })

  const cartStore = useCartStore()

  const productInCartIndex = computed(() =>
    cartStore.cart?.findIndex(
      (item: ICartProduct) => item.id === props.product.id,
    ),
  )
  const isProductInCart = computed(() => productInCartIndex.value > -1)
  const isVariantInCart = computed(
    () =>
      isProductInCart.value &&
      cartStore.cart[productInCartIndex.value]?.color ===
        props.currentVariant.color,
  )

  const btnText = computed(() => {
    if (isLoading.value)
      return 'Загрузка...'
    return isVariantInCart.value ? 'Remove' : 'Add To Cart'
  })

  function addToCart() {
    if (!isVariantInCart.value)
      cartStore.addToCart(props.product, props.currentVariant)
    else cartStore.removeFromCart(props.product.id)
  }
</script>

<template>
  <AppButton class="product-button" @click="addToCart">
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
