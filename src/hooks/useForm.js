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
    }

    useEffect(() => {
        if (Object.keys(invalid).length === 0 && isSubmitting) {
            callback()
        }
    }, [invalid])

    return { handleChange, inputValues, handleSubmit, invalid }

}

export default useForm