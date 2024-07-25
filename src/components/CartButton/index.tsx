import { ShoppingCart } from '@phosphor-icons/react'
import * as S from './styles'
import { FC, useMemo } from 'react'

interface CartButtonProps {
  iconColor: string
  backgroundColor: string
  hoverBackground?: string
  hasQuantityIndicator?: boolean
}

export const CartButton: FC<CartButtonProps> = ({
  iconColor,
  backgroundColor,
  hoverBackground,
  hasQuantityIndicator = false,
}) => {
  const ordersCount = useMemo(() => 10, [])

  return (
    <S.ButtonContainer
      onClick={() => {}}
      backcolor={backgroundColor}
      hoverbackground={hoverBackground}
    >
      <ShoppingCart width={18} height={18} color={iconColor} weight="fill" />

      {ordersCount > 0 && hasQuantityIndicator && (
        <S.BoxCount>{ordersCount}</S.BoxCount>
      )}
    </S.ButtonContainer>
  )
}
