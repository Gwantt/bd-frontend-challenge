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
            <div className="form flex flex-col w-50 bg-white">
                <div className="progressbar"></div>
                <div className="container flex flex-col">
                    <div className="body">{pageDisplay()}</div>
                    <div className="footer">
                        {step >= 1 && (
                            <button
                                className='mr-40 bg-transparent hover:bg-gray-400 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'
                                onClick={() => {
                                    setStep((currentPage) => currentPage - 1)
                                }}
                                disabled={step === 0}
                            >
                                Prev
                            </button>
                        )}
                        {step < 2 ? (
                            <button
                                className='btn bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded'
                                onClick={() => {
                                    setStep((currentPage) => currentPage + 1)
                                }}
                                disabled={step === stepTitle.length - 1}
                            >
                                Next
                            </button>
                        ) : (
                            <button className='btn bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded' onClick={() => console.log(JSON.stringify(formData))} type='submit'>
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
