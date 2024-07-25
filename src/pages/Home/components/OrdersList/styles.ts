import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const MasterTitle = styled.div`
  font-size: 2rem;
  font-weight: 500;
  padding-bottom: 60px;
  color: ${({ theme }) => theme.baseSubTitle};
`

export const List = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const OrderCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 8px;
  width: 256px;
  height: 290px;
  border-radius: 10px 40px 10px 40px;
  background-color: ${({ theme }) => theme.baseCard};
`

export const CardImage = styled.div`
  width: 120px;
  height: 120px;
  margin-top: -50px;
`

export const CardTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.baseSubTitle};
  padding-bottom: 15px;
`

export const CardDescription = styled.div`
  font-size: 0.875rem;
  text-align: center;
  color: ${({ theme }) => theme.baseLabel};
`

export const CharacteristicsTagsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  gap: 5px;
`

export const CharacteristicsTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  padding: 0px 10px;
  border-radius: 100px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.yellowDark};
  background-color: ${({ theme }) => theme.yellowLight};
`

export const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const FooterButtonsRow = styled.div`
  display: flex;
  gap: 10px;
`

export const PriceAlignCenterRow = styled.div`
  display: flex;
  align-items: center;
`

export const PriceRow = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-end;
`

export const MoneySymbolLabel = styled.div`
  font-size: 0.875;
  color: ${({ theme }) => theme.baseSubTitle};
`

export const PriceLabel = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.baseSubTitle};
`
