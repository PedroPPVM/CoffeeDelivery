import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`

export const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const QualitiesBox = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const QualitiesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const QualityIconBox = styled.div<{ backcolor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  min-width: 2rem;
  height: 2rem;
  background-color: ${({ backcolor }) => backcolor || 'trasparent'};
`

export const QualityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const Title = styled.div`
  font-size: 5rem;
  font-weight: bolder;
  font-family: 'Baloo+2';
  padding-bottom: 10px;
  color: ${({ theme }) => theme.baseTitle};

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`

export const SubTitle = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.baseSubTitle};

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    padding-bottom: 10px;
  }
`

export const Message = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.baseText};

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`
