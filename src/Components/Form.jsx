import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error'

const Form = ({patients, setPatients, patient }) => {

    const [name, setName] = useState('')
    const [owner, setOwner] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [symptom, setSymptom] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        console.log(Object.keys(patient))
        setName(patient.name)
        setOwner(patient.owner)
        setEmail(patient.email)
        setDate(patient.date)
        setSymptom(patient.symptom)
    }, [patient])
    

    const createID = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
            e.preventDefault()

            if([name, owner, email, date, symptom].includes('')){
                console.log('There is an empty field ')
                setError(true)
                return;
            }
        
            setError(false)

            //cont objPatient
            const objPatient ={
                name,
                owner,
                email,
                date,
                symptom,
                id: createID()
            }

            setPatients([... patients, objPatient])

            //Reset Form
            setName('')
            setOwner('')
            setEmail('')
            setDate('')
            setSymptom('')
    }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className='font-black text-3xl text-center'>Patients Status</h2>
        <p className='text-lg mt-5 text-center mb-10'>Add Patients and {' '}
        <span className='text-green-600 font-bold '>Manage them</span>
        </p>
        <form 
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'
        onSubmit={handleSubmit}   
        >
            { error && <Error message='You need to fill all the fields'/>}

            <div className='mb-5'>
                <label htmlFor='Pet'
                className='block text-gray-700 uppercase font-bold'>
                    Pet Name
                </label>
                <input 
                id='Pet'
                type="text"
                placeholder='Pet Name'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='Owner'
                className='block text-gray-700 uppercase font-bold'>
                    Owner Name
                </label>
                <input 
                id='Owner'
                type="text"
                placeholder='Owner Name'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='email'
                className='block text-gray-700 uppercase font-bold'>
                    Email
                </label>
                <input 
                id='email'
                type="email"
                placeholder='Owner Email'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='discharged'
                className='block text-gray-700 uppercase font-bold'>
                    Discharged Date 
                </label>
                <input 
                id='discharged'
                type="date"
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='symptom'
                className='block text-gray-700 uppercase font-bold'>
                    Discharged
                </label>
                <textarea 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md'
                placeholder="Write your Symptoms" 
                id="symptom" 
                cols="30" 
                ows="10"
                value={symptom}
                onChange={(e) => setSymptom(e.target.value)}/>
            </div>
            <input  
                value={patient.id ? 'Edit Patient' : 'Add Patient'}
                type="submit" 
                className='bg-green-600 w-full p-3 text-white uppercase font-bold hover:bg-green-700 cursor-pointer transition-all'/>
        </form>
    </div>
  )
}

export default Form