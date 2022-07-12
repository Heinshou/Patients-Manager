import Form from "./Components/Form"
import Header from "./Components/Header"
import PacientList from "./Components/PacientList"
import {useState} from 'react'

 
function App() {
  
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  return (
    <div className="container mx-auto mt-20">
       <Header/>
       <div className="mt-12 md:flex">
       <Form
       patients={patients}
       setPatients={setPatients}
       patient={patient}
       />
       <PacientList
       patients={patients}
       setPatient={setPatient}
       />
       </div>
    </div>
  )
}

export default App
