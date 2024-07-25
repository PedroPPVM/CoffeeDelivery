import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  height: 38px;
  padding: 0px 5px;
  background-color: ${({ theme }) => theme.baseButton};
`

export const IconButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.purple};
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.purpleDark};
  }
`
