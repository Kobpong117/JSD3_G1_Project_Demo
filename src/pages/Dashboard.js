import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import ActivityForm from '../components/activity-form/ActivityForm'


const Dashboard = () => {
    const [showForm, setShowForm] = useState(false)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const submitForm = () => {
      setIsFormSubmitted(true)
    }

  return (
    <div>
        <Navbar 
            setShowForm={setShowForm}
            setIsFormSubmitted={setIsFormSubmitted}
        />

        {!isFormSubmitted
          ? <ActivityForm 
              showForm={showForm}
              setShowForm={setShowForm}
              submitForm={submitForm}
            /> 
          : <div className='display-3'>Hello Dev</div>
        }
               
    </div>
  )
}

export default Dashboard