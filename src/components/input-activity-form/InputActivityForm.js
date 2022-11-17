import React, { useState } from 'react';
import './inputForm.css'
import validate from './validateInfo'

const InputActivityForm = (props) => {
    const [focused, setFocused] = useState(false)

    const handleFocus = (e) => { 
        setFocused(true)
    }

  return (
    
    <div className='form-input mb-3'>
        <label className='mb-2'>{props.label}</label>
        {
            props.type !== undefined &&
            props.type !== 'select' && props.type !== 'textarea'
            ?   <input
                    className='form-control' 
                    type={props.type}
                    placeholder={props.placeholder}
                    min={props.min}
                    max={props.max}
                    onChange={props.onChange}
                    name={props.name}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                />

            :   props.type === 'select'

            ?   <select 
                    className='form-control'
                    onChange={props.onChange}
                    name={props.name}
                >
                    <option value=''>--Choose Activity--</option>
                    <option value='run'>Running</option>
                    <option value='bicycle'>Riding Bicycle</option>
                    <option value='swim'>Swimming</option>
                    <option value='walk'>Walking</option>
                    <option value='hike'>Hiking</option>
                </select>

            :   <textarea
                    className='form-control'
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    name={props.name}
                />
        }

        { props.invalid && <span className='text-danger small invalid'>{props.invalid}</span> } 
        
    </div>
                
    
  )
}

export default InputActivityForm



            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name Your Activity</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Running in the central park"
                    autoFocus
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Put any detail here.."/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Activity Type</Form.Label>
                <Form.Select 
                    aria-label="Default select"
                    // value={props.activity}
                    // onChange={(e) => props.setActivity(e.target.value)}
                >
                    <option value=''>--Choose Activity--</option>
                    <option value='run'>Runing</option>
                    <option value='bicycle'>Riding Bicycle</option>
                    <option value='swim'>Swimming</option>
                    <option value='walk'>Walking</option>
                    <option value='hike'>Hiking</option>
                </Form.Select>
                <span>I'm an error message</span>     
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Duration (Minimum 10 minute)</Form.Label>
              <Form.Control
                type="number"
                placeholder="30"
                min="10"
                max="360"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Select Date</Form.Label>
              <Form.Control
                type="date"
                min={today}
              />
            </Form.Group> */}