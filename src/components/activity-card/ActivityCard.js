import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import imageData from '../../images/imageData'

const ActivityCard = (props) => {
    // console.log(props.item.activityName)
    let savedData = JSON.parse(localStorage.getItem('cards')) || []
    const [edit, setEdit] = useState(false)

    let cardImg
    switch (props.item.activityType) {
      case 'running':
        cardImg = `${imageData.running}`
        break
      case 'biking':
        cardImg = `${imageData.biking}`
        break
      case 'swimming':
        cardImg = `${imageData.swimming}`
        break
      case 'walking':
        cardImg = `${imageData.walking}`
        break
      case 'hiking':
        cardImg = `${imageData.hiking}`
        break
      default:
        console.log('No image found')
    }

    const handleDelete = (e) => {
      e.preventDefault()
      let newData = savedData.filter(data => data.id !== props.item.id)
      localStorage.setItem('cards', JSON.stringify(newData))

      window.location.reload()
    }
    
  return (
    <Card className='px-2 col-lg-3 col-md-4 col-sm-6 h-100 m-3'>
      {/* <Card.Img variant="top" className='fas fa-biking'/> */}
      <div className='text-center' style={{fontSize:60}}><i className={cardImg}></i></div>
      <Card.Body>
        <Card.Title className='text-center display-6 mb-4'>{props.item.activityName}</Card.Title>
        <Card.Text>
          {props.item.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Activity Type: <span className='lead fw-semibold'>{props.item.activityType}</span></ListGroup.Item>
        <ListGroup.Item>Activity Date: <span className='lead fw-semibold'>{props.item.date}</span></ListGroup.Item>
        <ListGroup.Item>Duration: <span className='lead fw-semibold'>{props.item.duration}</span> minute</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" className='btn btn-light'>Edit</Card.Link>
        <Card.Link href="#" className='btn btn-danger' onClick={handleDelete}>Delete</Card.Link>
        <Card.Link href="#" className='btn btn-success' onClick={handleDelete}>Complete</Card.Link>
      </Card.Body>
    </Card>

  )
}

export default ActivityCard