import Expresso from '../../../../assets/Coffees/Expresso.svg'
import Americano from '../../../../assets/Coffees/Americano.svg'
import Cremoso from '../../../../assets/Coffees/ExpressoCremoso.svg'
import Gelado from '../../../../assets/Coffees/CafeGelado.svg'

import { ORDERS_MOCKUP } from './ordersListMockup'
import { ManageOrderQuantity } from '../../../../components/ManageOrderQuantity'
import { CartButton } from '../../../../components/CartButton'
import { useTheme } from 'styled-components'

import * as S from './styles'
import { useCallback, useContext, useState } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'

export const getImageByCoffe = (coffeName: string) => {
  switch (coffeName) {
    case 'Expresso Tradicional':
      return Expresso
    case 'Expresso Americano':
      return Americano
    case 'Expresso Cremoso':
      return Cremoso
    case 'Expresso Gelado':
      return Gelado
    case 'Café com Leite':
      return Gelado
    case 'Latte':
      return Gelado
    default:
      return Expresso
  }
}

export const OrdersList = () => {
  const theme = useTheme()
  const { addOrder } = useContext(OrderContext)
  const [options, setOptions] = useState<Order.default[]>(ORDERS_MOCKUP)

  const onUpdateOptionQuantity = useCallback(
    (optionId: string, quantity: number) => {
      const optionsUpdated = options.map((option) => {
        if (option.id === optionId) return { ...option, quantity }

        return option
      })

      setOptions(optionsUpdated)
    },
    [options],
  )

  return (
    <S.Container>
      <S.MasterTitle>Nossos cafés</S.MasterTitle>

      <S.List>
        {options.map((option) => {
          return (
            <S.OrderCard key={option.id}>
              <S.CardImage>
                <img
                  width={120}
                  height={120}
                  src={getImageByCoffe(option.name)}
                  alt=""
                />
              </S.CardImage>

              <S.CharacteristicsTagsRow>
                {option.characteristics.map((characteristic, index) => {
                  return (
                    <S.CharacteristicsTag key={`${characteristic}-${index}`}>
                      {characteristic}
                    </S.CharacteristicsTag>
                  )
                })}
              </S.CharacteristicsTagsRow>

              <S.CardTitle>{option.name}</S.CardTitle>

              <S.CardDescription>{option.description}</S.CardDescription>

              <S.Footer>
                <S.PriceAlignCenterRow>
                  <S.PriceRow>
                    <S.MoneySymbolLabel>R$</S.MoneySymbolLabel>

                    <S.PriceLabel>
                      {option.price.toFixed(2).replace('.', ',')}
                    </S.PriceLabel>
                  </S.PriceRow>
                </S.PriceAlignCenterRow>

                <S.FooterButtonsRow>
                  <ManageOrderQuantity
                    option={option}
                    onUpdateOptionQuantity={onUpdateOptionQuantity}
                  />

                  <CartButton
                    onClick={() => addOrder(option)}
                    color={theme.white}
                    backgroundColor={theme.purpleDark}
                    hoverBackground={theme.purple}
                  />
                </S.FooterButtonsRow>
              </S.Footer>
            </S.OrderCard>
          )
        })}
      </S.List>
    </S.Container>
  )
}
