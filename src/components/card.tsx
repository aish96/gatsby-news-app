import React from 'react'
import { Card } from 'react-bootstrap'

const NewsCard = (props: { thumbnailUrl: string, text: string, title: string, updatedAt: string, onClickHandler?: any }) => (
  <Card onClick={() => props.onClickHandler()}>
    <Card.Img variant="top" src={props.thumbnailUrl} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.text}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated {props.updatedAt}</small>
    </Card.Footer>
  </Card>
)

export default NewsCard