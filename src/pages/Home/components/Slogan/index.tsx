import { useTheme } from 'styled-components'
import SloganCoffee from '../../../../assets/SloganCoffee.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import * as S from './styles'

export const Slogan = () => {
  const theme = useTheme()

  return (
    <S.Container>
      <S.Slogan>
        <div>
          <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>

          <S.SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </S.SubTitle>
        </div>

        <S.QualitiesBox>
          <S.QualitiesColumn>
            <S.QualityRow>
              <S.QualityIconBox backcolor={theme.yellowDark}>
                <ShoppingCart
                  width={16}
                  height={16}
                  color={theme.white}
                  weight="fill"
                />
              </S.QualityIconBox>

              <S.Message>Compra simples e segura</S.Message>
            </S.QualityRow>

            <S.QualityRow>
              <S.QualityIconBox backcolor={theme.yellow}>
                <Timer
                  width={16}
                  height={16}
                  color={theme.white}
                  weight="fill"
                />
              </S.QualityIconBox>

              <S.Message>Entrega rápida e rastreada</S.Message>
            </S.QualityRow>
          </S.QualitiesColumn>

          <S.QualitiesColumn>
            <S.QualityRow>
              <S.QualityIconBox backcolor={theme.baseText}>
                <Package
                  width={16}
                  height={16}
                  color={theme.white}
                  weight="fill"
                />
              </S.QualityIconBox>

              <S.Message>Embalagem mantém o café intacto</S.Message>
            </S.QualityRow>

            <S.QualityRow>
              <S.QualityIconBox backcolor={theme.purple}>
                <Coffee
                  width={16}
                  height={16}
                  color={theme.white}
                  weight="fill"
                />
              </S.QualityIconBox>

              <S.Message>O café chega fresquinho até você</S.Message>
            </S.QualityRow>
          </S.QualitiesColumn>
        </S.QualitiesBox>
      </S.Slogan>

      <img src={SloganCoffee} alt="" />
    </S.Container>
  )
}
