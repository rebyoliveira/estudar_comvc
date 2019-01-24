import React from 'react'
import { Row, Col } from 'reactstrap'
import CourseCard from './CourseCard'
import styled from 'styled-components'

const ColCard = styled(Col)`
  margin-bottom: 25px;
`

const CourseSection = ({courses}) => {
  return (
    <Row>
      {
        courses.map(course =>(
          <ColCard key={course.id} sm={6} md={6} xl={3}>
            <CourseCard course={course} />
          </ColCard>
        ))
      }
    </Row>
  )
}

export default CourseSection;
