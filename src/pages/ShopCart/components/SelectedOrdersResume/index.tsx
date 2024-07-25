import { useTheme } from 'styled-components'
import { ManageOrderQuantity } from '../../../../components/ManageOrderQuantity'
import { getImageByCoffe } from '../../../Home/components/OrdersList'
import * as S from './styles'
import { Trash } from '@phosphor-icons/react'
import { useMemo } from 'react'
import { NavLink } from 'react-router-dom'

const formatPrice = (value: number) => {
  return value.toFixed(2).replace('.', ',')
}

export const SelectedOrdersResume = () => {
  const theme = useTheme()

  const selectedOrders = [
    {
      id: 1,
      name: 'Expresso Tradicional',
      price: 9.9,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Expresso Americano',
      price: 9.9,
      quantity: 2,
    },
  ]

  const totalItemsPrice = useMemo(() => {
    return selectedOrders.reduce((acc, curr) => {
      return (acc += curr.quantity * curr.price)
    }, 0)
  }, [])

  const deliveryPrice = useMemo(() => {
    return 3.5
  }, [])

  const totalFinalOrder = useMemo(() => {
    return totalItemsPrice + deliveryPrice
  }, [totalItemsPrice, deliveryPrice])

  return (
    <S.Container>
      <S.MasterTitle>Cafés selecionados</S.MasterTitle>

      <S.Box>
        <S.OrdersList>
          {selectedOrders.map((selectedOrder) => (
            <S.OrderBox key={selectedOrder.id}>
              <S.OrderRow>
                <img
                  width={64}
                  height={64}
                  src={getImageByCoffe(selectedOrder.name)}
                  alt=""
                />

                <S.OrderColumn>
                  <S.Title>{selectedOrder.name}</S.Title>

                  <S.ManageOrderRow>
                    <ManageOrderQuantity />

                    <S.DeleteButton>
                      <Trash width={22} height={22} color={theme.purple} />
                      REMOVER
                    </S.DeleteButton>
                  </S.ManageOrderRow>
                </S.OrderColumn>
              </S.OrderRow>

              <S.OrderPrice>
                R$ {formatPrice(selectedOrder.price * selectedOrder.quantity)}
              </S.OrderPrice>
            </S.OrderBox>
          ))}
        </S.OrdersList>

        <S.FinalPriceBox>
          <S.FinalPriceRow>
            <S.FinalPriceLabel>Total de itens</S.FinalPriceLabel>

            <S.FinalPriceLabel>
              R$ {formatPrice(totalItemsPrice)}
            </S.FinalPriceLabel>
          </S.FinalPriceRow>

          <S.FinalPriceRow>
            <S.FinalPriceLabel>Entrega</S.FinalPriceLabel>

            <S.FinalPriceLabel>
              R$ {formatPrice(deliveryPrice)}
            </S.FinalPriceLabel>
          </S.FinalPriceRow>

          <S.FinalPriceRow>
            <S.FinalPriceLabel
              fontsize="1.375rem"
              fontweight={700}
              color={theme.baseSubTitle}
            >
              Total
            </S.FinalPriceLabel>

            <S.FinalPriceLabel
              fontsize="1.375rem"
              fontweight={700}
              color={theme.baseSubTitle}
            >
              R$ {formatPrice(totalFinalOrder)}
            </S.FinalPriceLabel>
          </S.FinalPriceRow>
        </S.FinalPriceBox>

        <NavLink to={'/order-confirmed'} style={{ textDecoration: 'none' }}>
          <S.ConfirmButton onClick={() => {}}>CONFIRMAR PEDIDO</S.ConfirmButton>
        </NavLink>
      </S.Box>
    </S.Container>
  )
}
