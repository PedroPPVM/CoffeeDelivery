import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;

  @media (min-width: 768px) {
    max-height: calc(100vh - 125px);
    padding-right: 20px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.background};
      border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.baseHover};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.baseButton};
      border-radius: 6px;
    }
  }
`
