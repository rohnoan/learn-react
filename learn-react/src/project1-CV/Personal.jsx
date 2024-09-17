import React from 'react'

export default function Personal({onPersonalChange,personal}) {
  function handleChange(e){
    onPersonalChange(e.target.name,e.target.value);
  }
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <input
          type='text'
          name='name'
          value={personal.name}
          onChange={handleChange}
          placeholder='Name'
          className='border p-2'
        />
        <input
          type='email'
          name='email'
          value={personal.email}
          onChange={handleChange}
          placeholder='Email'
          className='border p-2'
        />
        <input
          type='text'
          name='phone'
          value={personal.phone}
          onChange={handleChange}
          placeholder='Phone'
          className='border p-2'
        />
      </div>
    </div>
  )
}
