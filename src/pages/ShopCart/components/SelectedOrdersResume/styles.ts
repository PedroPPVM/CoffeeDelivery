import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const MasterTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 6px;
  padding: 2.5rem;
  border-radius: 10px 40px 10px 40px;
  background-color: ${({ theme }) => theme.baseCard};
`

export const Title = styled.div`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.baseSubTitle};
`

export const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const OrderBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 5px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.baseButton};
`

export const OrderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const OrderColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const ManageOrderRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  @media (max-width: 768px) {
    padding-top: 10px;
    justify-content: center;
  }
`

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  height: 38px;
  gap: 3px;
  padding: 0px 8px;
  border-radius: 6px;
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.baseButton};
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.baseHover};
  }
`

export const OrderPrice = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.baseText};
`

export const FinalPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FinalPriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

export const FinalPriceLabel = styled.label<{
  fontsize?: string
  fontweight?: number
  color?: string
}>`
  font-size: ${({ fontsize }) => fontsize};
  font-weight: ${({ fontweight }) => fontweight};
  color: ${({ color }) => color};
`

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  height: 46px;
  width: 100%;
  padding: 0px 20px;
  color: ${({ theme, disabled }) => (disabled ? theme.baseText : theme.white)};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.baseHover : theme.yellow};
  transition: 0.5s;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.yellowDark};
  }
`
