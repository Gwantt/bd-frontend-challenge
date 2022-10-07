import React, { useState } from 'react'

const UserDetails = () => {
    return (
        <div className='first-step-container'>
            <input
                type='text'
                placeholder='First Name'
            />
            <input
                type='text'
                placeholder='Last Name'
            />
            <input
                type='text'
                placeholder='Username'
            />
            <input
                type='text'
                placeholder='Email Address'
            />
            <input
                type='text'
                placeholder='Password'
            />
            <input
                type='text'
                placeholder='Confirm Password'
            />
        </div>
    )
}

export default UserDetails
