import React from 'react'
import { Row } from 'reactstrap'
import CourseSection from './CourseSection'
import styled from 'styled-components'
import Logo from './logo.png'

const RowHeader = styled(Row)`
  background-color: #25a484;
`
const Img = styled.img`
  padding: 10px 30px 10px 30px;
`
const Title = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  text-aling: center;
  align-self: center;
`
const SubTitle = styled.h3`
  font-family: 'Source Sans Pro', sans-serif;
  color: rgb(89, 100, 127);
  text-aling: center;
  align-self: center;
  padding: 10px 30px 10px 30px;
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
        <SubTitle>Matérias personalizadas sem faculdade</SubTitle>
        <CourseSection courses={genericCourses} />
        <SubTitle>Matérias Gerais</SubTitle>
        <CourseSection courses={personalizedCourses} />
      </>
    )
  }
}

export default App;
