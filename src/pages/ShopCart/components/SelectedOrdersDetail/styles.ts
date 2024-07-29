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
  gap: 32px;
  border-radius: 6px;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.baseCard};
`

export const TitleRow = styled.div`
  display: flex;
  gap: 8px;
`

export const TitleColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const Title = styled.div`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.baseSubTitle};
`

export const Description = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.baseText};
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const InpuRow = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Input = styled.input<{ width?: string; hasError?: boolean }>`
  display: flex;
  align-items: center;
  width: ${({ width }) => width};
  padding: 0px 10px;
  border: 1px solid transparent;
  border-color: ${({ hasError }) => hasError && 'red'};
  height: 2.625rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.baseInput};
  font-size: 1rem;
  color: ${({ theme }) => theme.baseLabel};

  &:focus {
    border-color: ${({ theme }) => theme.yellowDark};
    outline: none;
  }

  @media (max-width: 768px) {
    width: auto;
  }
`

export const PaymentOptionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`

export const PaymentOptionButton = styled.button<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 6px;
  height: 50px;
  width: 180px;
  gap: 10px;
  border-color: ${({ isSelected, theme }) => isSelected && theme.purple};
  color: ${({ theme }) => theme.baseText};
  background-color: ${({ theme }) => theme.baseButton};
  transition: all 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.baseHover};
  }
`
