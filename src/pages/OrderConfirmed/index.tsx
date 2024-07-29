import { MapPin } from '@phosphor-icons/react'
import DeliveryImage from '../../assets/DeliveryImage.svg'

import * as S from './styles'
import { useTheme } from 'styled-components'
import { useContext, useMemo } from 'react'
import { OrderContext, PaymentType } from '../../contexts/OrderContext'

export const OrderConfirmed = () => {
  const theme = useTheme()
  const { deliveryAddress, paymentType } = useContext(OrderContext)

  const paymentTypeLabel = useMemo(() => {
    switch (paymentType) {
      case PaymentType.CREDIT_CARD:
        return 'Cartão de Crédito'
      case PaymentType.BANK_CARD:
        return 'Cartão de Débito'
      case PaymentType.MONEY:
        return 'Dinheiro'
      default:
        return ''
    }
  }, [paymentType])

  return (
    <S.Container>
      <S.Box>
        <div>
          <S.Title>Uhu! Pedido Confirmado</S.Title>

          <S.Description>
            Agora é só aguardar que logo o café chegará até você
          </S.Description>
        </div>

        <S.OrderDetail>
          <S.OrderDetailRow>
            <S.OrderDetailIconBox backColor={theme.purple}>
              <MapPin width={16} height={16} weight="fill" />
            </S.OrderDetailIconBox>
            <div>
              <>
                Entrega em
                <S.BoldText>{` ${deliveryAddress.street}, ${deliveryAddress.number}`}</S.BoldText>
              </>

              <div>{`${deliveryAddress.district} - ${deliveryAddress.city}`}</div>
            </div>
          </S.OrderDetailRow>

          <S.OrderDetailRow>
            <S.OrderDetailIconBox backColor={theme.yellow}>
              <MapPin width={16} height={16} weight="fill" />
            </S.OrderDetailIconBox>
            <div>
              <div>Previsão de Entrega</div>

              <S.BoldText>20 min - 30 min</S.BoldText>
            </div>
          </S.OrderDetailRow>

          <S.OrderDetailRow>
            <S.OrderDetailIconBox backColor={theme.yellowDark}>
              <MapPin width={16} height={16} weight="fill" />
            </S.OrderDetailIconBox>
            <div>
              <div>Pagamento na entrega</div>

              <S.BoldText>{paymentTypeLabel}</S.BoldText>
            </div>
          </S.OrderDetailRow>
        </S.OrderDetail>
      </S.Box>

      <img src={DeliveryImage} alt=""></img>
    </S.Container>
  )
}
