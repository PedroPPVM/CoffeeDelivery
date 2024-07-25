import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  @media (min-width: 768px) {
    justify-content: space-around;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.yellowDark};
  font-family: 'Baloo 2';
`

export const Description = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.baseText};
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const OrderDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  padding: 40px;
  border: 3px solid transparent;
  border-radius: 10px 40px 10px 40px;

  background: ${({ theme }) => `linear-gradient(white, white) padding-box,
    linear-gradient(var(--angle), ${theme.yellow}, ${theme.purple}) border-box`};
  animation: 6s rotate linear infinite;

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
`

export const OrderDetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const OrderDetailIconBox = styled.div<{ backColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ backColor }) => backColor};
`

export const BoldText = styled.label`
  font-weight: bold;
`
