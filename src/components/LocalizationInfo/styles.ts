import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  height: 2.375rem;
  gap: 5px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.purpleLight};
`

export const TextLocale = styled.div`
  color: ${({ theme }) => theme.purple};
  font-size: 0.875rem;
  font-weight: 700;
`
