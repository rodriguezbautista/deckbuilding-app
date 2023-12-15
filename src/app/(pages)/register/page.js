'use client'
import React from 'react'
import '../../styles/sesionform.css'

export default function Register () {
  return (
    <div className='form-container'>
      <form className='session-form'>
        <label htmlFor='email'>
          E-Mail
          <input type='email' id='email'/>
        </label>
        <label htmlFor='username'>
          Username
          <input type='text' id='username'/>
        </label>
        <label htmlFor='password'>
          Password
          <input type='password' id='password'/>
        </label>
        <label htmlFor='confirm-password'>
          Confirm Password
          <input type='password' id='confirm-password'/>
        </label>
        <button className='submit-btn' type='submit'>Register</button>
      </form>
    </div>
  )
}
