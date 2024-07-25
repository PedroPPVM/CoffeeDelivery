import { MapPin } from '@phosphor-icons/react'
import * as S from './styles'
import { useTheme } from 'styled-components'

export const LocalizationInfo = () => {
  const theme = useTheme()

  return (
    <S.Container>
      <MapPin width={22} height={22} color={theme.purple} weight="fill" />

      <S.TextLocale>Fortaleza, CE</S.TextLocale>
    </S.Container>
  )
}
