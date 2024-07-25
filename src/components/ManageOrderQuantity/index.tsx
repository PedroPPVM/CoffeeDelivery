import { Minus, Plus } from '@phosphor-icons/react'
import * as S from './styles'

export const ManageOrderQuantity = () => {
  return (
    <S.Container>
      <S.IconButton>
        <Minus size={22} />
      </S.IconButton>

      <div>1</div>

      <S.IconButton>
        <Plus size={22} />
      </S.IconButton>
    </S.Container>
  )
}
