import { Product as BaseProduct } from '@/app/models/product'


export type ProductCardProps = BaseProduct & {
  onAdd: (productId: number) => void
}
