import React from "react";

const Preferences = ({formData, setFormData}) => {
    return (
        <div>
            <div>
                <input
                    className='checked:bg-blue-500'
                    type='checkbox'
                    formData={formData.notification}
                    checked={formData.notification}
                    onChange={e => setFormData({...formData, notification: e.target.checked})}
                />
                <label className='font-medium text-gray-500'>
                    Send Notifcations
                </label>
            </div>

            <div>
                <input
                    type='checkbox'
                    value={formData.shareInfo}
                    checked={formData.shareInfo}
                    onChange={e => setFormData({...formData, shareInfo: e.target.checked})}
                />
                <label className='font-medium text-gray-500'>
                    Share Information with related marketer
                </label>
            </div>

            <div>
                <select
                    value={formData.notifPref}
                    onChange={e => {
                        setFormData({...formData, notifPref: e.target.value})}}
                >
                    <option disabled>Dropdown: Email or Text</option>
                    <option>Email</option>
                    <option>Text</option>
                </select>
            </div>

        </div>
    )
}

export default Preferences
