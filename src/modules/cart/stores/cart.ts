import { computed, ref } from 'vue'
import { tryLocalStorage } from '@/utils/tryLocalStorage'
import type { ICartProduct, IProductVariant } from '@/types/product'
import { defineStore } from 'pinia'
import { pinia } from '@/stores/pinia'

export const useCartStore = () => {
  const store = defineStore('cart', () => {
    const cart = ref<ICartProduct[]>([])
    
    const PRODUCTS_KEY = 'products'
    
    const getTotalQuantity = computed(() =>
      cart.value?.reduce((sum, current) => sum + current.quantity, 0),
    )
    
    const getTotalPrice = computed(() =>
      cart.value?.reduce((sum, current) => {
        return sum + current.price * current.quantity
      }, 0),
    )
    
    function addToCart(product: ICartProduct, currentVariant: IProductVariant) {
      cart.value.push({
        id: product.id,
        name: product.name,
        price: currentVariant.price,
        color: currentVariant.color,
        quantity: 1,
      })
      
      syncLocalStorage()
      
      console.log(`Итоговая цена товаров в корзине: ${getTotalPrice.value}`)
    }
    
    function removeFromCart(id: number) {
      const index = cart.value?.map((el) => el.id).indexOf(Number(id))
      cart.value.splice(index, 1)
      
      syncLocalStorage()
    }
    
    function syncLocalStorage() {
      tryLocalStorage(() => {
        console.log(cart.value.length)
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(cart.value))
      })
    }
    
    function setStore() {
      tryLocalStorage(() => {
        if (!localStorage?.getItem(PRODUCTS_KEY)) return
        
        cart.value = JSON.parse(<string>localStorage.getItem(PRODUCTS_KEY)) || []
      })
    }
    
    return {
      cart,
      addToCart,
      removeFromCart,
      setStore,
      getTotalQuantity,
    }
  })
  
  return store(pinia)
}
