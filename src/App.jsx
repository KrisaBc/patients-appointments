import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PatientsList from './components/PatientsList'
import Modal from './components/Modal'

function App() {
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})
  const [showModal, setShowModal] = useState(false)

  const deletePatient = () => {
    const modifiedPatients = patients.filter(actualPatient => actualPatient.id !== patient.id)

    setPatient({})
    setPatients(modifiedPatients)
    setShowModal(false)
  }

  return (
    <div className='continer mx-auto'>
      <Header />
      <div className='mt-5 md:flex'>
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          setPatients={setPatients}
          setShowModal={setShowModal}
        />
      </div>
      {showModal && <>
        <div
          className='
        justify-center 
        items-center flex 
        overflow-x-hidden 
        overflow-y-auto 
        fixed 
        inset-0 z-50 
        outline-none 
        focus:outline-none'>
          <Modal deletePatient = {deletePatient} setShowModal={setShowModal} setPatient={setPatient}/>
        </div>
        <div className="
        opacity-25 
        fixed 
        inset-0 
        z-40 
        bg-black"></div>
      </>
        }
    </div>
  )
}

export default App
