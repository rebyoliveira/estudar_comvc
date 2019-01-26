import React from 'react'
import Dashboard from './Dashboard'
import Carregando from './Carregando'
import ErrorPage from './ErrorPage'
import styled from 'styled-components'
import axios from 'axios'


class App extends React.Component {
  state = {
    loading: true,
    error: false,
    courses: [],
  }

  componentDidMount() {
    this.fetchCourses()
  }

  retry = () => {
    this.setState({loading: true, error: false}, () => {
      this.fetchCourses()
    })
  }

  fetchCourses = () => {
    const _this = this
    axios.get('https://raw.githubusercontent.com/estudarcomvoce/frontend-challenge/master/assets/courses.json')
      .then(function (response) {
        _this.setState({loading: false, courses: response.data})
      })
      .catch(function (error) {
        _this.setState({loading: false, error: true})
      })
  }

  render() {
    if (this.state.loading === true) {
      return <Carregando />
    }
    if (this.state.error === true) {
      return <ErrorPage retry={this.retry} />
    }
    return (
      <Dashboard courses={this.state.courses} />
    )
  }
}

export default App;
