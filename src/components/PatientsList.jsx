import { useEffect } from "react"
import Patient from "./Patient"


function PatientsList({ patients, setPatient, setShowModal }) {

  useEffect(() => {
    const getPatients = () => {
      const storagePatients = JSON.parse(localStorage.getItem("patients")) ?? []
    
      setPatient(storagePatients)
    }
    getPatients()
  }, [])

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients))
  }, [patients])

  return (<div className="md:w-1/2 lg:w-3/5 mb-10">
    {patients.length !== 0 ? <>
      <h2
        className="font-black text-2xl text-teal-500 text-center">
        Patients List
      </h2>
      <p
        className="font-black text-center text-slate-400">
        Find your patients
      </p>

      <div className="md:h-screen overflow-y-scroll mx-5">
        {patients.map(patient =>
          <Patient
            key={patient.id}
            patient={patient}
            setPatient={setPatient}
            setShowModal={setShowModal}
          />)}
      </div>
    </> :
      <>
        <h2
          className="font-black text-2xl text-teal-500 text-center">
          No patient yet
        </h2>
        <p
          className="font-black text-center text-slate-400">
          Please add your first patient
        </p>
      </>}
  </div>)
}

export default PatientsList