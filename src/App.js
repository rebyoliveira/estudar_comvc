import React from 'react'
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap'

const courses = [
  {
    "id": 1,
    "name": "Física II",
    "description": "Curso remasterizado e criado inteiramente baseado na sua graduação da POLI USP. Provas passadas resolvidas, teoria explicadinha e muitos exercícios extra. Aproveite!",
    "generic": false,
    "highlight": true
  },
  {
    "id": 2,
    "name": "Cálculo I",
    "description": "Bem-vindos a este curso de Cálculo 1, formulado especialmente para você, aluno da Poli USP! Aqui, você aprenderá tudo o que precisa e ainda encontrará dicas extraordinárias pra arrasar nas provas!  Embarque nessa viagem e bons estudos :)",
    "generic": false,
    "highlight": true
  },
  {
    "id": 3,
    "name": "Probabilidade",
    "description": "Probabilidade, a matéria que pode dar um sustinho às vezes. Mas relaxa!!! Pula no Estudarboat aqui pra entender as maravilhas dessa matéria e se preparar da melhor forma possível pra destruir nas provinhas.",
    "generic": true,
    "highlight": false
  },
  {
    "id": 4,
    "name": "Cálculo IV",
    "description": "",
    "generic": false,
    "highlight": false
  },
  {
    "id": 5,
    "name": "Mecânica I",
    "description": "Curso completo Mecânica com todos os conceitos. Aqui você encontra tudo o que precisa pra mandar bem, como vídeo aulas, listas de exercício, exercícios resolvidos e provas resolvidas!",
    "generic": true,
    "highlight": true
  },
  {
    "id": 6,
    "name": "Física IV",
    "description": "Curso criado com base na matéria de Física IV da faculdade Poli USP. Aqui você encontra tudo o que precisa pra mandar bem, como provas passadas resolvidas, videoaulas, listas de exercícios e exercícios resolvidos!",
    "generic": false,
    "highlight": false
  },
  {
    "id": 7,
    "name": "Álgebra Linear II",
    "description": "Curso criado com base na matéria Álgebra Linear II da Poli USP. Aqui você encontra tudo o que precisa pra mandar bem, como videoaulas, listas de exercício, exercícios resolvidos e provas resolvidas!",
    "generic": false,
    "highlight": true
  },
  {
    "id": 8,
    "name": "Eletricidade Geral",
    "description": "Curso completo de Eletricidade Geral. Aqui você encontra tudo o que precisa pra mandar bem, como vídeo aulas, listas de exercício, exercícios resolvidos e provas resolvidas!",
    "generic": false,
    "highlight": true
  },
  {
    "id": 9,
    "name": "Cálculo II",
    "description": "Curso de Cálculo II especialmente para os alunos da Poli USP. Vídeos, provas passadas resolvidas e muitos exercícios pra você mandar super bem!",
    "generic": false,
    "highlight": false
  },
  {
    "id": 10,
    "name": "Programação em Python",
    "description": "Curso completo de programação em Python",
    "generic": true,
    "highlight": false
  },
  {
    "id": 11,
    "name": "Estatística",
    "description": "Curso de estatística com tudo que você precisa pra mandar super bem nessa matéria da Poli. Provas passadas resolvidas, simulados, teoria e exercícios resolvidos!",
    "generic": false,
    "highlight": false
  },
  {
    "id": 12,
    "name": "Cálculo III",
    "description": "Vídeos criados com base na matéria de Cálculo III da Escola Politécnica da USP",
    "generic": false,
    "highlight": true
  },
  {
    "id": 13,
    "name": "Física III",
    "description": "Vídeos eletrizantes criados com base na matéria de Física 3 da Escola Politécnica da USP",
    "generic": false,
    "highlight": true
  },
  {
    "id": 14,
    "name": "Física I",
    "description": "Vídeos criados com base na matéria de Física I da Escola Politécnica da USP. ",
    "generic": false,
    "highlight": true
  },
  {
    "id": 15,
    "name": "Cálculo Numérico",
    "description": "Vídeos criados com base na matéria de Cálculo Numérico da Escola Politécnica da USP",
    "generic": true,
    "highlight": false
  },
  {
    "id": 16,
    "name": "Álgebra Linear I",
    "description": "Vídeos criados com base na matéria de Álgebra Linear I da Escola Politécnica da USP ",
    "generic": false,
    "highlight": true
  }
]

const CourseCard = ({course}) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{course.name}</CardTitle>
        <CardText>{course.description}</CardText>
      </CardBody>
    </Card>
  );
}

class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {
            courses.map(course =>(
              <Col key={course.id} >
                <CourseCard course={course} />
              </Col>
            ))
          }
        </Row>
      </Container>
    )
  }
}

export default Dashboard;
