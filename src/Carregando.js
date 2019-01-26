import React from 'react'
import { Row, Container, Spinner } from 'reactstrap'
import styled from 'styled-components'

const MainDiv = styled(Row)`
  justify-content: center;
  align-self: center;
`

const SubTitle = styled.h2`
  color: rgb(89, 100, 127);
  align-self: center;
  margin-top: 25px;
  margin-bottom: 20px;
  font-size: 25px;
`

const Carregando = ({courses}) => {
  return (
    <Container>
      <MainDiv>
        <SubTitle>
        Carregando
        </SubTitle>
      </MainDiv>
      <MainDiv>
        <Spinner color="secondary" />
      </MainDiv>
    </Container>
  )
}

export default Carregando;
