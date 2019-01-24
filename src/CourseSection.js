import React from 'react'
import { Row, Col } from 'reactstrap'
import CourseCard from './CourseCard'


const CourseSection = ({courses}) => {
  return (
    <Row>
      {
        courses.map(course =>(
          <Col key={course.id} xs={3} >
            <img alt={`Capa Para o Curso ${course.name}`}  src={`/images/curso4.jpg`}></img>
            <CourseCard course={course} />
          </Col>
        ))
      }
    </Row>
  )
}

export default CourseSection;
