import { Product } from '@/app/models/product'


export type ProductListProps = {
  products: Product[]
  onAdd: (productId: number) => void
}