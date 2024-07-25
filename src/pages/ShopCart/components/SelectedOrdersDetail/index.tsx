import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import * as S from './styles'
import { useTheme } from 'styled-components'

export const SelectedOrdersDetail = () => {
  const theme = useTheme()

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

        <S.InputColumn>
          <S.Input value={''} placeholder="CEP" width="40%" />

          <S.Input value={''} placeholder="Rua" />

          <S.InpuRow>
            <S.Input value={''} placeholder="Número" width="45%" />

            <S.Input value={''} placeholder="Complemento" width="60%" />
          </S.InpuRow>

          <S.InpuRow>
            <S.Input value={''} placeholder="Bairro" width="45%" />

            <S.Input value={''} placeholder="Cidade" width="45%" />

            <S.Input value={''} placeholder="UF" width="10%" />
          </S.InpuRow>
        </S.InputColumn>
      </S.Box>

      <S.Box>
        <S.TitleRow>
          <CurrencyDollar width={22} height={22} color={theme.purple} />

          <S.TitleColumn>
            <S.Title>Pagamento</S.Title>

            <S.Description>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </S.Description>
          </S.TitleColumn>
        </S.TitleRow>

        <S.PaymentOptionsRow>
          <S.PaymentOptionButton onClick={() => {}}>
            <CreditCard width={18} height={18} color={theme.purple} />

            <S.Description>CARTÃO DE CRÉDITO</S.Description>
          </S.PaymentOptionButton>

          <S.PaymentOptionButton onClick={() => {}}>
            <Bank width={18} height={18} color={theme.purple} />

            <S.Description>CARTÃO DE DÉBITO</S.Description>
          </S.PaymentOptionButton>

          <S.PaymentOptionButton onClick={() => {}}>
            <Money width={18} height={18} color={theme.purple} />

            <S.Description>DINHEIRO</S.Description>
          </S.PaymentOptionButton>
        </S.PaymentOptionsRow>
      </S.Box>
    </S.Container>
  )
}
