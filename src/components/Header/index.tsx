import { NavLink, useNavigate } from 'react-router-dom'
import CoffeDeliveryLogo from '../../assets/Logo.svg'
import { CartButton } from '../CartButton'
import { LocalizationInfo } from '../LocalizationInfo'

import * as S from './styles'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export const Header = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const { orders } = useContext(OrderContext)

  return (
    <S.Container>
      <NavLink to={'/'} title="Logo">
        <img src={CoffeDeliveryLogo} alt=""></img>
      </NavLink>

      <S.RowAlign>
        <LocalizationInfo />

        <CartButton
          disabled={orders.length === 0}
          onClick={() => navigate('/shop-cart')}
          color={theme.yellowDark}
          backgroundColor={theme.yellowLight}
          hasQuantityIndicator={orders.length}
        />
      </S.RowAlign>
    </S.Container>
  )
}
