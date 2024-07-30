import styled from 'styled-components'

export const ButtonContainer = styled.button<{
  backcolor: string
  hoverbackground?: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  color: ${({ color }) => color};
  background-color: ${({ backcolor }) => backcolor};
  transition: 0.5s;

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.baseLabel};
    background-color: ${({ theme }) => theme.baseButton};
  }

  &:hover {
    background-color: ${({ hoverbackground }) =>
      hoverbackground && hoverbackground};
  }
`

export const BoxCount = styled.div`
  position: absolute;
  margin-left: 35px;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.yellowDark};
  font-size: 0.75rem;
`
