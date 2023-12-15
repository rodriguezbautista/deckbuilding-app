'use client'
import React from 'react'
import '../../styles/sesionform.css'

export default function Login () {
  return (
    <div className='form-container'>
      <form className='session-form'>
        <label htmlFor='username'>
          Username
          <input type='text' id='username'/>
        </label>
        <label htmlFor='password'>
          Password
          <input type='password' id='password'/>
        </label>
        <button className='submit-btn' type='submit'>Log In</button>
      </form>
    </div>
  )
}
