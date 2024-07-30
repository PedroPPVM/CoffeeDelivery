import { Minus, Plus } from '@phosphor-icons/react'
import * as S from './styles'
import { FC } from 'react'

interface ManageOrderQuantityProps {
  option: Order.default
  onUpdateOptionQuantity: (orderId: string, quantity: number) => void
}

export const ManageOrderQuantity: FC<ManageOrderQuantityProps> = ({
  option,
  onUpdateOptionQuantity,
}) => {
  return (
    <S.Container>
      <S.IconButton
        disabled={option.quantity < 2}
        onClick={() => {
          onUpdateOptionQuantity(option.id, option.quantity - 1)
        }}
      >
        <Minus size={22} />
      </S.IconButton>

      <div>{option.quantity}</div>

      <S.IconButton
        onClick={() => {
          onUpdateOptionQuantity(option.id, option.quantity + 1)
        }}
      >
        <Plus size={22} />
      </S.IconButton>
    </S.Container>
  )
}
