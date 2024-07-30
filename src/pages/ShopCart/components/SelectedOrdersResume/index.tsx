import { useTheme } from 'styled-components'
import { ManageOrderQuantity } from '../../../../components/ManageOrderQuantity'
import { getImageByCoffe } from '../../../Home/components/OrdersList'
import * as S from './styles'
import { Trash } from '@phosphor-icons/react'
import { useContext, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  DeliveryAddressProps,
  OrderContext,
} from '../../../../contexts/OrderContext'

const formatPrice = (value: number) => {
  return value.toFixed(2).replace('.', ',')
}

export const SelectedOrdersResume = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const {
    orders,
    paymentType,
    removeOrder,
    onUpdateOrderQuantity,
    clearAllOrder,
    handleSubmit,
    reset,
    onUpdateDeliveryAddress,
  } = useContext(OrderContext)

  const totalItemsPrice = useMemo(() => {
    return orders.reduce((acc, curr) => {
      return (acc += curr.quantity * curr.price)
    }, 0)
  }, [orders])

  const deliveryPrice = useMemo(() => {
    return 3.5
  }, [])

  const totalFinalOrder = useMemo(() => {
    return totalItemsPrice + deliveryPrice
  }, [totalItemsPrice, deliveryPrice])

  useEffect(() => {
    if (orders.length === 0) navigate('/')
  }, [])

  const handleConfirmOrder = (data: DeliveryAddressProps) => {
    clearAllOrder()
    onUpdateDeliveryAddress(data)
    reset()
    navigate('/order-confirmed')
  }

  return (
    <S.Container>
      <S.MasterTitle>Cafés selecionados</S.MasterTitle>

      <S.Box>
        <S.OrdersList>
          {orders.map((selectedOrder) => (
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
                    <ManageOrderQuantity
                      option={selectedOrder}
                      onUpdateOptionQuantity={onUpdateOrderQuantity}
                    />

                    <S.DeleteButton
                      onClick={() => {
                        removeOrder(selectedOrder.id)

                        if (orders.length === 1) navigate('/')
                      }}
                    >
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

        <S.ConfirmButton
          title={
            paymentType === null ? 'Campos obrigatórios não preenchidos!' : ''
          }
          disabled={paymentType === null}
          onClick={handleSubmit(handleConfirmOrder)}
        >
          CONFIRMAR PEDIDO
        </S.ConfirmButton>
      </S.Box>
    </S.Container>
  )
}
