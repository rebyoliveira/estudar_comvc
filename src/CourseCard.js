import React from 'react'
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap'



const CourseCard = ({course}) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{course.name}</CardTitle>
        <CardText>{course.description}</CardText>
      </CardBody>
    </Card>
  );
};

export default CourseCard;
