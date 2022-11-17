import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import ActivityForm from '../components/activity-form/ActivityForm'

const Dashboard = () => {
    const [showForm, setShowForm] = useState(false)


  return (
    <div>
        <Navbar 
            setShowForm={setShowForm}
        />

        <ActivityForm 
            showForm={showForm}
            setShowForm={setShowForm}
        />        
    </div>
  )
}

export default Dashboard