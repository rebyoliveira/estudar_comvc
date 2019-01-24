import React from 'react'
import { Row, Col } from 'reactstrap'
import CourseCard from './CourseCard'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ColCard = styled(Col)`
  margin-bottom: 25px;
`

const CourseSection = ({courses}) => {
  return (
    <Row>
      {
        courses.map(course =>(
          <ColCard key={course.id} sm={6} md={6} xl={3}
            data-testid='col-course'
          >
            <CourseCard
              id={course.id}
              highlight={course.highlight}
              name={course.name}
              description={course.description}
            />
          </ColCard>
        ))
      }
    </Row>
  )
}

CourseSection.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    highlight: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    generic: PropTypes.bool.isRequired,
  })).isRequired
}

export default CourseSection;
