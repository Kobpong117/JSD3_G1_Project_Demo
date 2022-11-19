// Custom hook: useForm
import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {
    const [inputValues, setInputValues] = useState({
        activityName: "",
        description: "",
        activityType: "",
        duration: "",
        date: ""
    })


    const [invalid, setInvalid] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setInputValues(prevValues => {
          return {
            ...prevValues,
            [name]: value
          }
        })   
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setInvalid(validate(inputValues))
        setIsSubmitting(true)

        const savedData = JSON.parse(localStorage.getItem('cards')) || []

        for (let field in inputValues) {
            if (inputValues[field] === '') return
        }

        let newData = {
            id: Date.now(),
            activityName: inputValues.activityName,
            description: inputValues.description,
            activityType: inputValues.activityType,
            duration: inputValues.duration,
            date: inputValues.date
        }
    
        // console.log(newData)

        savedData.push(newData)
        localStorage.setItem('cards', JSON.stringify(savedData))
        
        
    }

    useEffect(() => {
        if (Object.keys(invalid).length === 0 && isSubmitting) {
            callback()
        }
    }, [invalid])

    return { handleChange, inputValues, handleSubmit, invalid }

}

export default useForm