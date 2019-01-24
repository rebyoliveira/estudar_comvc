import React from 'react'
import { Card, CardText, CardBody, CardTitle } from 'reactstrap'
import styled from 'styled-components'

const CardCourse = styled(Card)`
  height: 100%;
  border-radius: 0.5em;
`

const CardName = styled(CardTitle)`
  font-family: 'Source Sans Pro', sans-serif;
  color: #28bd98;
  text-aling: center;
  align-self: center;
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 20px;
`

const CardDescription = styled(CardText)`
  font-family: 'Source Sans Pro', sans-serif;
  color: rgb(89, 100, 127);
  text-aling: center;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 15px;
`

const CardImage = styled.img`
  border-radius: 0.5em;
`

const CourseCard = ({course}) => {
  return (
    <CardCourse data-testid={`card-course-${course.id}`}>
      {
        course.highlight &&
          <div class="ribbon"><span>Em Alta</span></div>
      }
      <CardImage alt={`Capa Para o Curso ${course.name}`}  src={`/images/curso4.jpg`}></CardImage>
      <CardBody>
        <CardName>{course.name}</CardName>
        <CardDescription>{course.description || "Sem descrição no momento"}</CardDescription>
      </CardBody>
    </CardCourse>
  )
}

export default CourseCard;
