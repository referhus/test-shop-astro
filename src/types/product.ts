export interface IProduct {
  id: number
  image: string
  name: string
  description: string
  variants: IProductVariant[]
}

export interface IProductVariant {
  color: string
  price: number
  oldPrice: number
}

export interface ICartProduct {
  id: number
  color: string
  price: number
  name: string
  quantity: number
}
