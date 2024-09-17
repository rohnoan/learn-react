import React from 'react';

export default function Experience({ experience, index, onExperienceChange, onRemove }) {
  function handleChange(e) {
    onExperienceChange(index, e.target.name, e.target.value);
  }

  return (
    <div className='flex flex-col gap-4 border p-4'>
      <input
        type='text'
        name='company'
        value={experience.company}
        onChange={handleChange}
        placeholder='Company'
        className='border p-2'
      />
      <input
        type='text'
        name='role'
        value={experience.role}
        onChange={handleChange}
        placeholder='Role'
        className='border p-2'
      />
      <input
        type='text'
        name='years'
        value={experience.years}
        onChange={handleChange}
        placeholder='Years'
        className='border p-2'
      />
      <button
        onClick={onRemove}
        className='px-4 py-2 bg-red-500 text-white rounded'
      >
        Remove
      </button>
    </div>
  );
}
