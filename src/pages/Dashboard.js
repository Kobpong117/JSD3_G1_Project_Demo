import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import ActivityForm from '../components/activity-form/ActivityForm'
import ActivityCard from '../components/activity-card/ActivityCard'


const Dashboard = () => {
    const [showForm, setShowForm] = useState(false)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
      setData(JSON.parse(localStorage.getItem('cards')) || [])
    }, [])

    const submitForm = () => {
      setIsFormSubmitted(true)
    }

    
  return (
    <div>
        <Navbar 
            setShowForm={setShowForm}
            setIsFormSubmitted={setIsFormSubmitted}
        />

        {!isFormSubmitted &&
          <ActivityForm 
            showForm={showForm}
            setShowForm={setShowForm}
            submitForm={submitForm}
          /> 
        }

        <div className='row justify-content-start mx-0 p-5'>
          {!data.length
            ? <h1 className='display-1 text-center text-muted'>Create New Activity</h1>
            : data.map(item => (
                <ActivityCard 
                  key={item.id}
                  item={item}
                />
              ))             
          }
        </div>        
    </div>
  )
}

export default Dashboard