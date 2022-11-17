import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import InputActivityForm from '../input-activity-form/InputActivityForm'
import useForm from '../../hooks/useForm'
import validate from '../input-activity-form/validateInfo'


function ActivityForm(props) {
    const { submitForm } = props
    const { handleChange, inputValues, handleSubmit, invalid } = useForm(submitForm, validate)

    const thisDate = new Date()
    const today = `${thisDate.getFullYear()}-${thisDate.getMonth() + 1}-${thisDate.getDate()}`

    const inputs = [
      {
        id: 1,
        name: "activityName",
        type: "text",
        label: "Name Your Activity",
        pattern: "RUN",
        required: true
      },
      {
        id: 2,
        name: "description",
        type: "textarea",
        label: "Description",
        placeholder: "Put any detail here..",
        rows: 3,
        required: true
      },
      {
        id: 3,
        name: "activityType",
        type: "select",
        label: "Activity Type",
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
        required: true
      },
      {
        id: 5,
        name: "date",
        type: "date",
        label: "Select Date",
        min: today,
        required: true
      },
    ]


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
                invalid={invalid[input.name]}
              />
            ))}
            
            <Modal.Footer>
              <Button variant="secondary" onClick={() => props.setShowForm(false)}>
                Close
              </Button>
              <Button variant="primary" type="submit" >
                Apply
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ActivityForm