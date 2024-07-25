import { OrdersList } from './components/OrdersList'
import { Slogan } from './components/Slogan'

import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <Slogan />

      <OrdersList />
    </S.Container>
  )
}
