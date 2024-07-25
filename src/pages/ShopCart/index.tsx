import { SelectedOrdersDetail } from './components/SelectedOrdersDetail'
import { SelectedOrdersResume } from './components/SelectedOrdersResume'
import * as S from './styles'

export const ShopCart = () => {
  return (
    <S.Container>
      <SelectedOrdersDetail />

      <SelectedOrdersResume />
    </S.Container>
  )
}
