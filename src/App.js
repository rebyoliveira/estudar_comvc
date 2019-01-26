import React from 'react'
import Dashboard from './Dashboard'
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
      return <h1>Carregando</h1>
    }
    if (this.state.error === true) {
      return (
        <>
          <h1>Ops, aconteceu um erro inesperado, tente novamente!</h1>
          <button onClick={this.retry}>Tentar novamente</button>
        </>
      )
    }
    return (
      <Dashboard courses={this.state.courses} />
    )
  }
}

export default App;
