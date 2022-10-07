import React, { useState } from 'react'

const UserDetails = ({formData, setFormData}) => {
    return (
        <div className='first-step-container'>
            <input
                type='text'
                placeholder='First Name'
                value={formData.firstName}
                onChange={e => setFormData({...formData, firstName: e.target.value})}
            />
            <input
                type='text'
                placeholder='Last Name'
                value={formData.lastName}
                onChange={e => setFormData({...formData, lastName: e.target.value})}
            />
            <input
                type='text'
                placeholder='Username'
                value={formData.username}
                onChange={e => setFormData({...formData, username: e.target.value})}
            />
            <input
                type='text'
                placeholder='Email Address'
                value={formData.emailAddress}
                onChange={e => setFormData({...formData, emailAddress: e.target.value})}
            />
            <input
                type='password'
                placeholder='Password'
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}

            />
            <input
                type='password'
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                onChange={e => setFormData({...formData, confirmPassword: e.target.value})}

            />
        </div>
    )
}

export default UserDetails
