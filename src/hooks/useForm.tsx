import React, {useState} from 'react'

type InputEvent = React.ChangeEvent<HTMLInputElement>
type SubmitEvent = React.FormEvent<HTMLFormElement>

function useForm(initialState = {}, onSubmit: (formData: {}) => Object) {
    const [formData, setFormData] = useState(initialState)

    const handleInputChange = (event: InputEvent) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event: SubmitEvent) => {
        event.preventDefault()
        onSubmit?.(formData)
    }

    return {formData, handleInputChange, handleSubmit}
}

export default useForm
