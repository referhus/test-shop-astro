import type { IProduct } from '@/types/product.ts'

export const INITIAL_ITEMS: IProduct[] = [
  {
    id: 1,
    image: '/images/products/1.jpg',
    name: 'Poinsettia',
    description:
      'Poinsettias are a festive and well-known plant for the winter holiday season. Learn how to grow and take care',
    variants: [
      {
        color: 'rgba(134, 169, 103, 1)',
        price: 100,
        oldPrice: 110,
      },
      {
        color: 'rgba(186, 207, 168, 1)',
        price: 100,
        oldPrice: 200,
      },
      {
        color: 'rgba(88, 129, 191, 1)',
        price: 70,
        oldPrice: 180,
      },
      {
        color: 'rgba(164, 187, 221, 1)',
        price: 200,
        oldPrice: 290,
      },
    ],
  },
  {
    id: 2,
    name: 'Poinsettia 2',
    image: '/images/products/1.jpg',
    description:
      'Poinsettias are a festive and well-known plant for the winter holiday season. Learn how to grow and take care',
    variants: [
      {
        color: 'rgba(134, 169, 103, 1)',
        price: 130,
        oldPrice: 210,
      },
      {
        color: 'rgba(186, 207, 168, 1)',
        price: 150,
        oldPrice: 210,
      },
      {
        color: 'rgba(88, 129, 191, 1)',
        price: 91,
        oldPrice: 101,
      },
      {
        color: 'rgba(164, 187, 221, 1)',
        price: 201,
        oldPrice: 210,
      },
    ],
  },
  {
    id: 3,
    image: '/images/products/1.jpg',
    name: 'Poinsettia 3',
    description:
      'Poinsettias are a festive and well-known plant for the winter holiday season. Learn how to grow and take care',
    variants: [
      {
        color: 'rgba(134, 169, 103, 1)',
        price: 100,
        oldPrice: 200,
      },
      {
        color: 'rgba(186, 207, 168, 1)',
        price: 120,
        oldPrice: 210,
      },
      {
        color: 'rgba(88, 129, 191, 1)',
        price: 90,
        oldPrice: 100,
      },
      {
        color: 'rgba(164, 187, 221, 1)',
        price: 200,
        oldPrice: 220,
      },
    ],
  },
]
