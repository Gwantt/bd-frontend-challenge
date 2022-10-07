import React, { useState } from "react"
import PersonalInfo from "./PersonalInfo"
import UserDetails from "./UserDetails"
import Preferences from "./Preferences"

const FormSignUp = () => {

    const [step, setStep] = useState(0)

    const stepTitle = ['Account', 'Address', 'Preferences']

    const pageDisplay = () => {
        switch(step) {
            case 0:
                return <UserDetails />
            case 1:
                return <PersonalInfo />
            case 2:
                return <Preferences />
        }
    }

    return (
        <div className="form">
            <div className="progressbar"></div>
            <div className="container">
                <div className="header">
                    <h1>
                        {stepTitle[step]}
                    </h1>
                </div>
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
                    <button
                        onClick={() => {
                            setStep((currentPage) => currentPage + 1)
                        }}
                        disabled={step === stepTitle.length - 1}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FormSignUp
