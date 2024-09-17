import React from 'react';

export default function Educations({ education, index, onEducationChange, onRemove }) {
  function handleChange(e) {
    onEducationChange(index, e.target.name, e.target.value);
  }

  return (
    <div className='flex flex-col gap-4 border p-4'>
      <input
        type='text'
        name='school'
        value={education.school}
        onChange={handleChange}
        placeholder='School'
        className='border p-2'
      />
      <input
        type='text'
        name='degree'
        value={education.degree}
        onChange={handleChange}
        placeholder='Degree'
        className='border p-2'
      />
      <input
        type='text'
        name='year'
        value={education.year}
        onChange={handleChange}
        placeholder='Year'
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
