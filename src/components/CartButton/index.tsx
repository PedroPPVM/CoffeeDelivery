import { ShoppingCart } from '@phosphor-icons/react'
import * as S from './styles'
import { ButtonHTMLAttributes, FC } from 'react'

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor: string
  onClick?: () => void
  hoverBackground?: string
  hasQuantityIndicator?: number
}

export const CartButton: FC<CartButtonProps> = (props) => {
  return (
    <S.ButtonContainer
      backcolor={props.backgroundColor}
      hoverbackground={props.hoverBackground}
      {...props}
    >
      <ShoppingCart width={18} height={18} weight="fill" />

      {!!props.hasQuantityIndicator && (
        <S.BoxCount>{props.hasQuantityIndicator}</S.BoxCount>
      )}
    </S.ButtonContainer>
  )
}
