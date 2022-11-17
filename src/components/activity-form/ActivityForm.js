import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputActivityForm from '../input-activity-form/InputActivityForm';
import validate from '../input-activity-form/validateInfo'

function ActivityForm(props) {
    const [inputValues, setInputValues] = useState({
      activityName: "",
      description: "",
      activityType: "",
      duration: "",
      date: ""
    })

    const [invalid, setInvalid] = useState({})

    const thisDate = new Date()
    const today = `${thisDate.getFullYear()}-${thisDate.getMonth() + 1}-${thisDate.getDate()}`

    const inputs = [
      {
        id: 1,
        name: "activityName",
        type: "text",
        label: "Name Your Activity",
        placeholder: "Running in the central park",
        errorMessage: "Please set an activity name",
        pattern: "RUN",
        required: true
      },
      {
        id: 2,
        name: "description",
        type: "textarea",
        label: "Description",
        placeholder: "Put any detail here..",
        errorMessage: "Please provide some description",
        rows: 3,
        required: true
      },
      {
        id: 3,
        name: "activityType",
        type: "select",
        label: "Activity Type",
        errorMessage: "Please select an activity type",
        required: true
      },
      {
        id: 4,
        name: "duration",
        type: "number",
        label: "Duration (between 10 - 360 minute)",
        placeholder: "30",
        min: 10,
        max: 360,
        errorMessage: "Please set the duration time for you activity between 10 - 360 minute",
        required: true
      },
      {
        id: 5,
        name: "date",
        type: "date",
        label: "Select Date",
        min: today,
        errorMessage: "Please select the date for your activity",
        required: true
      },
    ]

    const handleSubmit = (e) => {
      e.preventDefault()
      
      console.log(validate(inputValues))
      
    }

    const handleChange = (e) => {
      const { name, value } = e.target
      setInputValues(prevValues => {
        return {
          ...prevValues,
          [name]: value
        }
      })
     
    }

  return (
    <>
      <Modal show={props.showForm} onHide={() => props.setShowForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Setting An Activity</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            {inputs.map(input => (
              <InputActivityForm
                key={input.id}
                {...input} 
                onChange={handleChange}
                value={inputValues[input.name]}
                // isInvalid={isInvalid}
              />
            ))}
            
            <Modal.Footer>
              <Button variant="secondary" onClick={() => props.setShowForm(false)}>
                Close
              </Button>
              <Button variant="primary" type="submit" >
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ActivityForm