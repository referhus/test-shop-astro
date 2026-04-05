import { ref } from 'vue'
import { type IProduct } from '@/types/product'

export function useProducts() {
  const products = ref<IProduct[]>([])

  function setProducts(items: IProduct[]) {
    products.value = structuredClone(items)
  }

  return {
    products,
    setProducts,
  }
}
