import React from 'react'
import Patient from './Patient'

const PacientList = ({patients, setPatient}) => {
    

    return (
        <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen">
            
            {patients && patients.length ? (
            <>
             <h2 className='font-black text-3xl text-center'>Patients list</h2>
             <p className='text-xl mt-5 mb-10 text-center'>
                 Manage your  {' '}
                 <span className='text-green-600 font-bold'>Patients & Dates</span>
             </p>
 
             {patients.map( patient => (
                 <Patient
                 patient={patient}
                 key={patient.id}
                 setPatient={setPatient}
                 />
             ))}
            </>
     ) :
            <>
            <h2 className='font-black text-3xl text-center'>There are not patients</h2>
             <p className='text-xl mt-5 mb-10 text-center'>
                 First add some patients  {' '}
                 <span className='text-green-600 font-bold'>they will appear on this place</span>
             </p></>
        }
           
          
        </div>
    )
}

export default PacientList