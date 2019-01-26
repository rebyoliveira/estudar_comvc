import React from 'react'
import { Row, Col, Container, InputGroup, Input } from 'reactstrap'
import CourseSection from './CourseSection'
import styled from 'styled-components'
import Logo from './logo.png'
import User from './user.png'
import PropTypes from 'prop-types'

const RowHeader = styled(Row)`
  background-color: #25a484;
  margin: 0px;
`

const Img = styled.img`

`

const Title = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  margin-bottom: 0px;
  font-size: 30px;
`

const SubTitle = styled.h2`
  font-family: 'Source Sans Pro', sans-serif;
  color: rgb(89, 100, 127);
  align-self: center;
  margin-top: 25px;
  margin-bottom: 20px;
`
const ColNav = styled(Col)`
  justify-content: flex-start;
  align-self: center;
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
        <div id="menu-small" className="d-md-none">
          <RowHeader>
            <ColNav xs ={2} sm={1} md={1} xl={1}>
              <p><Img src={Logo} alt="Logo Estudar" size={40} style={{marginTop: 10}}/></p>
            </ColNav>
            <ColNav xs ={8} sm={9} md={4} xl={3}><Title>Sala de aula</Title></ColNav>
            <ColNav xs ={2} sm={2} md={2} xl={2}><Img src={User} alt="Usuário" size={40} style={{float: 'right'}}/></ColNav>
          </RowHeader>
          <RowHeader>
            <ColNav xs ={12} sm={12} md={5} xl={6} style={{marginBottom: 10}}>
              <InputGroup>
                <Input data-testid="searchBox" placeholder='Digite para pesquisar um curso :)' onChange={this.handleChange} value={this.state.search} />
              </InputGroup>
            </ColNav>
          </RowHeader>
        </div>
        <div id="menu-medium" className="d-none d-md-block">
          <RowHeader style={{padding: '10px 0px'}}>
            <ColNav xs ={2} sm={1} md={1} xl={1}><Img src={Logo} alt="Logo Estudar" size={40}/></ColNav>
            <ColNav xs ={8} sm={9} md={4} xl={3}><Title>Sala de aula</Title></ColNav>
            <ColNav xs ={12} sm={12} md={5} xl={6}>
              <InputGroup>
                <Input data-testid="searchBox" placeholder='Digite para pesquisar um curso :)' onChange={this.handleChange} value={this.state.search} />
              </InputGroup>
            </ColNav>
            <ColNav xs ={2} sm={2} md={2} xl={2}><Img src={User} alt="Usuário" size={40} style={{float: 'right', marginRight: 40}}/></ColNav>
          </RowHeader>
        </div>
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
