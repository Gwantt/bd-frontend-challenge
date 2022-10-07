import React, { useState, useEffect } from "react"
import PersonalInfo from "./PersonalInfo"
import UserDetails from "./UserDetails"
import Preferences from "./Preferences"

const FormSignUp = () => {
    const [errors, setErrors] = useState([])
    const [step, setStep] = useState(0)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        emailAddress: "",
        password: "",
        confirmPassword: "",
        address: "",
        apt: "",
        country: "",
        city: "",
        zipcode: "",
        company: "",
        phone: "",
        notification: false,
        shareInfo: false,
        notifPref: ""
    })

    useEffect(() => {
        if(step === 0) {
            setErrors([])
            const errors = []

            if(!formData.username) {
                errors.push('please enter username')
            }

            if(!formData.emailAddress) {
                errors.push('please enter email address')
            }

            if(!formData.password) {
                errors.push('please enter password')
            }

            if(!formData.confirmPassword) {
                errors.push('please confirm your password')
            }

            if(formData.password !== formData.confirmPassword) {
                errors.push('please make sure your passwords match')
            }
            setErrors(errors)
        }

        if(step === 1) {
            setErrors([])
            const errors = []

            if(!formData.address) {
                errors.push('please enter your address')
            }

            if(!formData.country) {
                errors.push('please select a country')
            }

            if(!formData.zipcode) {
                errors.push('please enter your zipcode')
            }
            setErrors(errors)
        }

        if(step === 2) {
            setErrors([])
            const errors = []

            if(!formData.notifPref) {
                errors.push('Please select preferred form of contact')
            }

            setErrors(errors)
        }

    }, [step, formData.username, formData.emailAddress, formData.password, formData.confirmPassword, formData.address, formData.country, formData.zipcode, formData.notifPref])

    const stepTitle = ['Account', 'Address', 'Preferences']

    const pageDisplay = () => {
        switch (step) {
            case 0:
                return <UserDetails formData={formData} setFormData={setFormData} />
            case 1:
                return <PersonalInfo formData={formData} setFormData={setFormData} />
            case 2:
                return <Preferences formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <>
            <div className="header">
                <h1 className='text-3xl font-bold'>
                    {stepTitle[step]}
                </h1>
            </div>
            {errors.length > 0 && errors.map((error, idx) => (
                <div key={idx} className='font-medium text-red-500'>{error}</div>
            )) }
            <div className="form flex flex-col w-auto bg-white box-border">
                <div className="progressbar"></div>
                <div className="container flex flex-col">
                    <div className="body w-90">{pageDisplay()}</div>
                    <div className="footer">
                        {step >= 1 && (
                            <button
                                className='mr-40 bg-transparent hover:bg-gray-400 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'
                                onClick={() => {
                                    setStep((currentPage) => currentPage - 1)
                                }}
                                disabled={step === 0}
                            >
                                ← Back
                            </button>
                        )}
                        {step < 2 ? (
                            <button
                                className='btn bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded'
                                onClick={() => {
                                    setStep((currentPage) => currentPage + 1)
                                }}
                                disabled={errors.length}
                            >
                                Next →
                            </button>
                        ) : (
                            <button className='btn bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded' disabled={errors.length} onClick={() => {
                                alert('You have successfully registered!')
                                console.log(JSON.stringify(formData))}} type='submit'>
                                Register!
                            </button>
                        )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormSignUp
