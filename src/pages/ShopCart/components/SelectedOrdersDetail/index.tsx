import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import * as S from './styles'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { OrderContext, PaymentType } from '../../../../contexts/OrderContext'

export const SelectedOrdersDetail = () => {
  const theme = useTheme()
  const { register, paymentType, onChangePaymentType, formState } =
    useContext(OrderContext)

  return (
    <S.Container>
      <S.MasterTitle>Complete seu pedido</S.MasterTitle>

      <S.Box>
        <S.TitleRow>
          <MapPinLine width={22} height={22} color={theme.yellowDark} />

          <S.TitleColumn>
            <S.Title>Endereço de Entrega</S.Title>

            <S.Description>
              Informe o endereço onde deseja receber seu pedido
            </S.Description>
          </S.TitleColumn>
        </S.TitleRow>

        <S.InputBox>
          <S.Input
            maxLength={8}
            placeholder="CEP *"
            width="40%"
            hasError={!!formState.errors.cep?.message}
            {...register('cep')}
          />

          <S.Input
            placeholder="Rua *"
            hasError={!!formState.errors.street?.message}
            {...register('street')}
          />

          <S.InpuRow>
            <S.Input
              placeholder="Número *"
              width="45%"
              hasError={!!formState.errors.number?.message}
              {...register('number', { valueAsNumber: true })}
            />

            <S.Input
              placeholder="Complemento"
              width="60%"
              {...register('complement')}
            />
          </S.InpuRow>

          <S.InpuRow>
            <S.Input
              placeholder="Bairro *"
              width="45%"
              hasError={!!formState.errors.district?.message}
              {...register('district')}
            />

            <S.Input
              placeholder="Cidade *"
              width="45%"
              hasError={!!formState.errors.city?.message}
              {...register('city')}
            />

            <S.Input
              placeholder="UF *"
              width="10%"
              maxLength={2}
              hasError={!!formState.errors.uf?.message}
              {...register('uf')}
            />
          </S.InpuRow>
        </S.InputBox>
      </S.Box>

      <S.Box>
        <S.TitleRow>
          <CurrencyDollar width={22} height={22} color={theme.purple} />

          <S.TitleColumn>
            <S.Title>Pagamento *</S.Title>

            <S.Description>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </S.Description>
          </S.TitleColumn>
        </S.TitleRow>

        <S.PaymentOptionsRow>
          <S.PaymentOptionButton
            isSelected={paymentType === PaymentType.CREDIT_CARD}
            onClick={() => onChangePaymentType(PaymentType.CREDIT_CARD)}
          >
            <CreditCard width={18} height={18} color={theme.purple} />

            <S.Description>CARTÃO DE CRÉDITO</S.Description>
          </S.PaymentOptionButton>

          <S.PaymentOptionButton
            isSelected={paymentType === PaymentType.BANK_CARD}
            onClick={() => onChangePaymentType(PaymentType.BANK_CARD)}
          >
            <Bank width={18} height={18} color={theme.purple} />

            <S.Description>CARTÃO DE DÉBITO</S.Description>
          </S.PaymentOptionButton>

          <S.PaymentOptionButton
            isSelected={paymentType === PaymentType.MONEY}
            onClick={() => onChangePaymentType(PaymentType.MONEY)}
          >
            <Money width={18} height={18} color={theme.purple} />

            <S.Description>DINHEIRO</S.Description>
          </S.PaymentOptionButton>
        </S.PaymentOptionsRow>
      </S.Box>
    </S.Container>
  )
}
