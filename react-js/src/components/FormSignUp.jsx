import React, { useState } from "react"
import PersonalInfo from "./PersonalInfo"
import UserDetails from "./UserDetails"
import Preferences from "./Preferences"

const FormSignUp = () => {

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

    const stepTitle = ['Account', 'Address', 'Preferences']

    const pageDisplay = () => {
        switch(step) {
            case 0:
                return <UserDetails formData={formData} setFormData={setFormData}/>
            case 1:
                return <PersonalInfo formData={formData} setFormData={setFormData}/>
            case 2:
                return <Preferences formData={formData} setFormData={setFormData}/>
        }
    }

    return (
        <div className="form">
                <div className="header">
                    <h1 className='text-3xl font-bold'>
                        {stepTitle[step]}
                    </h1>
                </div>
            <div className="progressbar"></div>
            <div className="container">
                <div className="body">{pageDisplay()}</div>
                <div className="footer">
                    <button
                        onClick={() => {
                            setStep((currentPage) => currentPage - 1)
                        }}
                        disabled={step === 0}
                    >
                        Prev
                    </button>
                    {step < 2 ? (
                        <button
                        className='btn'
                        onClick={() => {
                            setStep((currentPage) => currentPage + 1)
                        }}
                        disabled={step === stepTitle.length - 1}
                        >
                            Next
                        </button>
                    ) : (
                        <button onClick={() => console.log(JSON.stringify(formData))}type='submit'>
                            Register!
                        </button>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default FormSignUp
