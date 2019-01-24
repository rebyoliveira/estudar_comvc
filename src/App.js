import React from 'react'
import { Row, Container } from 'reactstrap'
import CourseSection from './CourseSection'
import styled from 'styled-components'
import Logo from './logo.png'
import PropTypes from 'prop-types'

const RowHeader = styled(Row)`
  background-color: #25a484;
`

const Img = styled.img`
  padding: 10px 30px 10px 30px;
`

const Title = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  align-self: center;
  margin-bottom: 0px;
`

const SubTitle = styled.h3`
  font-family: 'Source Sans Pro', sans-serif;
  color: rgb(89, 100, 127);
  text-aling: center;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

class App extends React.Component {
  render() {
    const { courses } = this.props
    const genericCourses = courses.filter((course) => course.generic)
    const personalizedCourses = courses.filter((course) => !course.generic)

    return (
      <>
        <RowHeader>
          <Img src={Logo} alt="Logo Estudar" size={40} />
          <Title>Dashboard</Title>
        </RowHeader>
        <Container>
          <SubTitle>Matérias personalizadas sem faculdade</SubTitle>
          <CourseSection courses={genericCourses} />
          <SubTitle>Matérias Gerais</SubTitle>
          <CourseSection courses={personalizedCourses} />
        </Container>
      </>
    )
  }
}

App.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    highlight: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    generic: PropTypes.bool.isRequired,
  })).isRequired
}

export default App;
