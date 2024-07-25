import { NavLink } from 'react-router-dom'
import CoffeDeliveryLogo from '../../assets/Logo.svg'
import { CartButton } from '../CartButton'
import { LocalizationInfo } from '../LocalizationInfo'

import * as S from './styles'
import { useTheme } from 'styled-components'

export const Header = () => {
  const theme = useTheme()

  return (
    <S.Container>
      <NavLink to={'/'} title="Logo">
        <img src={CoffeDeliveryLogo} alt=""></img>
      </NavLink>

      <S.RowAlign>
        <LocalizationInfo />

        <NavLink to={'/shop-cart'}>
          <CartButton
            iconColor={theme.yellowDark}
            backgroundColor={theme.yellowLight}
            hasQuantityIndicator
          />
        </NavLink>
      </S.RowAlign>
    </S.Container>
  )
}
