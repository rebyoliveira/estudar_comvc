import React from 'react'
import { Card, CardText, CardBody, CardTitle } from 'reactstrap'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

const CourseCard = ({id, highlight, name, description}) => {
  return (
    <CardCourse data-testid={`card-course-${id}`}>
      {
        highlight &&
          <div className="ribbon" data-testid={`ribbon-course-${id}`}><span>Em Alta</span></div>
      }
      <CardImage alt={`Capa Para o Curso ${name}`}  src={`/images/curso4.jpg`}></CardImage>
      <CardBody>
        <CardName>{name}</CardName>
        <CardDescription>{description || "Sem descrição no momento"}</CardDescription>
      </CardBody>
    </CardCourse>
  )
}

CourseCard.propTypes = {
  id: PropTypes.number.isRequired,
  highlight: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default CourseCard;
