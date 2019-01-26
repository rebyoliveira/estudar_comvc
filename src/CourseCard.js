import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const CardMain = styled.div`
  height: 100%;
  border-radius:10px;
  border: 1px solid #ccc;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  }
`
const CardName = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  color: #28bd98;
  text-aling: center;
  align-self: center;
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 20px;
  cursor: pointer;
  width: calc(100% - 30px);
  padding: 0px 15px;
`
const CardImage = styled.img`
  border-radius: 0.5em;
  vertical-align: top;
  width: 100%;
`
const CardDescription = styled.h5`
  font-family: 'Source Sans Pro', sans-serif;
  color: #59647f;
  align-self: center;
  margin-top: 0px;
  font-size: 15px;
`

const Figure = styled.figure`
  font-family: 'Raleway', Arial, sans-serif;
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  color: #ffffff;
  text-align: left;
  border-radius: 0.5em;
  height: 100%;
  margin-bottom: 0px;

  * {
    -webkit-transition: all 0.35s;
    transition: all 0.35s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  & h3 {
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    margin: 3px 0;
  }
  & h5 {
    font-weight: 400;
    margin: 0;
    color: transparent;
    letter-spacing: 1px;
    padding-top: 10px;
    text-indent: 20px;
  }
  & a {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  & figcaption {
    color: transparent;
    background-color: transparent;
    width: 100%;
  }
  &:hover figcaption {
    padding-top: 20px;
    background-color: #fff;
  }

  &:hover h3,
  &.hover h3,
  &:hover h5,
  &.hover h5 {
    color: rgb(89, 100, 127);
  }
`
const Figcaption = styled.figcaption`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.75);
`

class CourseCard extends React.Component {
  render() {
    const { id, highlight, name, description } = this.props

    return(
      <>
        <CardMain data-testid={`card-course-${id}`}>
          {
            highlight &&
              <div className="ribbon" data-testid={`ribbon-course-${id}`}><span>Em Alta</span></div>
          }
          <Figure>
            <CardImage src={`${process.env.PUBLIC_URL}/images/curso4.png`} alt={`Capa Para o Curso ${name}`}/>
            <Figcaption>
              <CardDescription>{description || "Sem descrição no momento"}</CardDescription>
            </Figcaption><a alt={`Capa Para o Curso ${name}`} ></a>
            <div>
              <CardName>{name}</CardName>
            </div>
          </Figure>
        </CardMain>
      </>
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
