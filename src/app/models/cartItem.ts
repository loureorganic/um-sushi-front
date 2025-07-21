type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image?: string
}

export type CartItemProps = {
  items: CartItem[]
  onIncrement: (id: number) => void
  onDecrement: (id: number) => void
  onRemove: (id: number) => void
  onClose: () => void
  isOpen: boolean
}