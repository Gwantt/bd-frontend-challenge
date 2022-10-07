import React, { useState, useEffect } from 'react'

const UserDetails = ({formData, setFormData}) => {


    return (
        <div className='flex flex-col'>

            <div className='flex flex-row'>
                    <div className='flex flex-col pb-5 mr-3'>
                        <label className='text-xs font-medium'>First Name</label>
                        <input
                            className='bg-gray-200 text-gray-900 text-sm block w-full p-2.5'
                            type='text'
                            placeholder='Placeholder'
                            value={formData.firstName}
                            onChange={e => setFormData({...formData, firstName: e.target.value})}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-xs font-medium'>Last Name</label>
                        <input
                            className='bg-gray-200 text-gray-900 text-sm block w-full p-2.5'
                            type='text'
                            placeholder='Placeholder'
                            value={formData.lastName}
                            onChange={e => setFormData({...formData, lastName: e.target.value})}
                        />
                    </div>
            </div>
            <div className='flex flex-col pb-5'>
                <label className='text-xs font-medium'>Username*</label>
                <input
                    className='bg-gray-200 text-gray-900 text-sm block w-full p-2.5'
                    type='text'
                    placeholder='Username'
                    value={formData.username}
                    onChange={e => setFormData({...formData, username: e.target.value})}
                />
            </div>
            <div className='flex flex-col pb-5'>
                <label className='text-xs font-medium'>Email Address*</label>
                <input
                    className='bg-gray-200 text-gray-900 text-sm block w-full p-2.5'
                    type='text'
                    placeholder='Email Address'
                    value={formData.emailAddress}
                    onChange={e => setFormData({...formData, emailAddress: e.target.value})}
                />
            </div>

            <div className="flex flex-row pb-5">
                <div className='flex flex-col'>

                    <label className='text-xs font-medium'>Password*</label>
                    <input
                        className='bg-gray-200 text-gray-900 text-sm block w-full p-2.5'
                        type='password'
                        placeholder='Password'
                        value={formData.password}
                        onChange={e => setFormData({...formData, password: e.target.value})}

                    />
                </div>
                <div className='flex flex-col'>
                    <label className='text-xs font-medium ml-3'>Confirm Password*</label>
                    <input
                        className='bg-gray-200 ml-3 text-gray-900 text-sm block w-full p-2.5'
                        type='password'
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        onChange={e => setFormData({...formData, confirmPassword: e.target.value})}

                    />
                </div>
            </div>
        </div>
    )
}

export default UserDetails
