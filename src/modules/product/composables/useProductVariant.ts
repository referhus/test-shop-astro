import type { IProductVariant } from '@/types/product'
import { ref } from 'vue'

export function useProductVariant(variants: IProductVariant) {
  const currentVariant = ref(variants[0])

  function changeVariant(variant: IProductVariant) {
    currentVariant.value = variant
  }

  return {
    currentVariant,
    changeVariant,
  }
}
