import React from 'react'

const Patient = ({patient, setPatient}) => {
  return (
    <div className='mx-5 my-10  bg-white shadow-md px-5 py-10 rounded-xl'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {' '}
        <span className='font-normal normal-case'>{patient.name}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Onwer: {' '}
        <span className='font-normal normal-case'>{patient.owner}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {' '}
        <span className='font-normal normal-case'>{patient.email}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Discharged: {' '}
        <span className='font-normal normal-case'>{patient.date}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Symptoms: {' '}
        <span className='font-normal normal-case'>{patient.symptom}</span>
    </p>
    <div className='flex mt-10 justify-between'>
        <button type='button' onClick={() => setPatient(patient)} className='py-2 px-10 bg-green-600 hover:bg-green-700 text-white font-bold uppercase rounded'>Editar</button>
        <button type='button' className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded'>Eliminar</button>
    </div>
</div>
  )
}

export default Patient