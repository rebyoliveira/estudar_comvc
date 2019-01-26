import React from 'react'
import { Row, Container, Spinner, Button } from 'reactstrap'
import styled from 'styled-components'

const MainDiv = styled(Row)`
  justify-content: center;
  align-self: center;
`

const SubTitle = styled.h2`
  font-family: 'Source Sans Pro', sans-serif;
  color: rgb(89, 100, 127);
  align-self: center;
  margin-top: 25px;
  margin-bottom: 20px;
  font-size: 25px;
`

const ErrorPage = ({courses, retry}) => {
  return (
    <Container>
      <MainDiv>
        <SubTitle>Ops, aconteceu um erro inesperado, tente novamente!</SubTitle>
      </MainDiv>
      <MainDiv>
        <Button color="secondary" onClick={retry}>Tentar novamente</Button>
      </MainDiv>
    </Container>
  )
}

export default ErrorPage;
