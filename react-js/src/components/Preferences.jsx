import React from "react";

const Preferences = () => {
    return (
        <div>
            <div>
                <input
                    type='checkbox'
                />
                <label>
                    Send Notifcations
                </label>
            </div>

            <div>
                <input
                    type='checkbox'
                />
                <label>
                    Share Information with related marketer
                </label>
            </div>

            <div>
                <select>
                    <option disabled>Dropdown: Email or Text</option>
                    <option>Email</option>
                    <option>Text</option>
                </select>
            </div>

        </div>
    )
}

export default Preferences
