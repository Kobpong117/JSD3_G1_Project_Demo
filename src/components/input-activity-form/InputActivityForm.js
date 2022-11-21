import React from 'react';
import './inputForm.css'


const InputActivityForm = (props) => {

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
                />

            :   props.type === 'select'

            ?   <select 
                    className='form-control'
                    onChange={props.onChange}
                    name={props.name}
                >
                    <option value=''>--Choose Activity--</option>
                    <option value='running'>Running</option>
                    <option value='biking'>Riding Bicycle</option>
                    <option value='swimming'>Swimming</option>
                    <option value='walking'>Walking</option>
                    <option value='hiking'>Hiking</option>
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
