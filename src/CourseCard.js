import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SnippetComponent from 'react-snippet-component'

const CardMain = styled(Card)`
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

// const CardDescription = styled(CardText)`
//   font-family: 'Source Sans Pro', sans-serif;
//   color: rgb(89, 100, 127);
//   text-aling: center;
//   align-self: center;
//   margin-top: 20px;
//   margin-bottom: 20px;
//   font-size: 15px;
// `

const CardImage = styled.img`
  border-radius: 0.5em;
`
const CardSnippet = styled.div`
  > * {
    font-family: 'Source Sans Pro', sans-serif;
    color: rgb(89, 100, 127);
    text-aling: center;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 10px;
    text-transform: lowercase;
    cursor: pointer;
  }
`

class CourseCard extends React.Component {
  render() {
    const { id, highlight, name, description } = this.props

    return(
      <CardMain data-testid={`card-course-${id}`}>
        {
          highlight &&
            <div className="ribbon" data-testid={`ribbon-course-${id}`}><span>Em Alta</span></div>
        }
        <CardSnippet>
          <SnippetComponent
            alt={`Capa Para o Curso ${name}`}
            title={description || "Sem descrição no momento"}
            image={`${process.env.PUBLIC_URL}/images/curso4.jpg`}
          >
            <CardImage alt={`Capa Para o Curso ${name}`}  />
          </SnippetComponent>
        </CardSnippet>
        <CardBody>
          <CardName>{name}</CardName>
        </CardBody>
      </CardMain>
    )
  }
}

CourseCard.propTypes = {
  id: PropTypes.number.isRequired,
  highlight: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default CourseCard;
