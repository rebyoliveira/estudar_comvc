import React from 'react'
import { Row, Container, InputGroup, Input } from 'reactstrap'
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

const Title = styled.h2`
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

class Dashboard extends React.Component {
  state = { search: '' }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  render() {
    const { courses } = this.props
    let filteredCourses
    if (this.state.search) {
      const searchRegex = new RegExp(this.state.search, "i")
      filteredCourses = courses.filter((course) => course.name.match(searchRegex))
    } else {
      filteredCourses = courses
    }
    const genericCourses = filteredCourses.filter((course) => course.generic === true)
    const personalizedCourses = filteredCourses.filter((course) => course.generic === false)

    return (
      <>
        <RowHeader>
          <div><Img src={Logo} alt="Logo Estudar" size={40} /></div>
          <div><Title>Dashboard</Title></div>
          <div>
            <InputGroup>
              <Input data-testid="searchBox" placeholder='Digite Para Pesquisar' onChange={this.handleChange} value={this.state.search} />
            </InputGroup>
          </div>
        </RowHeader>
        <Container>

          <SubTitle>Matérias personalizadas sem faculdade</SubTitle>
          <div data-testid="personalizedCourses">
            <CourseSection courses={personalizedCourses} />
          </div>
          <SubTitle>Matérias Gerais</SubTitle>
          <div data-testid="genericCourses">
            <CourseSection courses={genericCourses} />
          </div>
        </Container>
      </>
    )
  }
}

Dashboard.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    highlight: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    generic: PropTypes.bool.isRequired,
  })).isRequired
}

export default Dashboard;
