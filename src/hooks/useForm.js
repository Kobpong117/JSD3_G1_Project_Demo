// Custom hook: useForm
import { useState, useEffect } from 'react'

const useForm = () => {
    const [inputValues, setInputValues] = useState({
        activityName: "",
        description: "",
        activityType: "",
        duration: "",
        date: ""
    })


    const [invalid, setInvalid] = useState({})

    
    const handleChange = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target
        setInputValues(prevValues => {
          return {
            ...prevValues,
            [name]: value
          }
        })   
    }

    return { handleChange, inputValues }

}

export default useForm