import { useState, useEffect } from "react"
import ErrorMessage from "./ErrorMessage"
import generateId from "./helpers/generateId"

function Form({ patients, setPatients, patient, setPatient }) {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [email, setEmail] = useState("")
  const [symptoms, setSymptoms] = useState("")

  const [error, setError] = useState(false)

  console.log()

  useEffect(() => {

    if (Object.keys(patient.length > 0)) {
      setName(patient.name)
      setDate(patient.date)
      setEmail(patient.email)
      setSymptoms(patient.symptoms)
    }

  }, [patient]);

  const handleSubmit = event => {
    event.preventDefault()

    const arrayOfInputs = [name || "", date || "", email || "", symptoms || ""]

    const patientObject = {
      name,
      date,
      email,
      symptoms,
    }


    if (arrayOfInputs.map(input => input.trim()).includes('')) {
      setError(true)
    } else {
      if (patient.id) {

        patientObject.id = patient.id

        const modifiedPatients = patients.map(actualPatient => {
         return actualPatient.id === patient.id ? patientObject : actualPatient
        })
        setPatients(modifiedPatients)
      } else {
        patientObject.id = generateId()
        setPatients([...patients, patientObject])
      }

      setName('')
      setDate('')
      setEmail('')
      setSymptoms('')
      setPatient({})
      setError(false)
    }
  }

  return <div className="md:w-1/2 lg:w-2/5 mb-10">
    <h2 className="font-black text-2xl text-teal-500 text-center">Follow-up</h2>
    <p className="font-black text-center text-slate-400">Add or Modify Patient's Data</p>

    <form onSubmit={handleSubmit} className="shadow-md mt-5 mx-5 p-5 rounded-lg border">
      {error && <ErrorMessage><p>Please complete all the empty field</p></ErrorMessage>}

      <div className="mb-4">
        <label
          htmlFor="patient" className="block uppercase text-teal-500 mb-1">
          Patient Name </label>
        <input
          onChange={event => setName(event.target.value)}
          id="patient"
          className="rounded-md p-1 border-2 w-full text-slate-800"
          type="text"
          value={name || ""}
          placeholder="name" />
      </div>

      <div className="mb-4">
        <label
          htmlFor="date" className="block uppercase text-teal-500 mb-1 mt-4">
          Register Date </label>
        <input
          onChange={event => setDate(event.target.value)}
          id="date"
          className="rounded-md p-1 border-2 w-full text-slate-800"
          value={date || ""}
          type='date'
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email" className="block uppercase text-teal-500 mb-1">
          Email </label>
        <input
          onChange={event => setEmail(event.target.value)}
          id="email"
          className="rounded-md p-1 border-2 w-full text-slate-800"
          type='email'
          value={email || ""}
          placeholder="email@example.com" />
      </div>

      <div className="mb-4">
        <label
          htmlFor="symptoms" className="block uppercase text-teal-500 mb-1">
          Symptoms </label>
        <textarea
          onChange={event => setSymptoms(event.target.value)}
          id="symptoms"
          className="rounded-md p-1 border-2 w-full text-slate-800"
          value={symptoms || ""}
          placeholder="Symptoms description"
        />
      </div>

      <button
        type="submit"
        className="bg-green-200 uppercase text-teal-500 
        text-1xl w-full h-10 rounded-md hover:bg-green-300 hover:text-teal-100">
        {patient.id ? 'Edit Patient' : 'Add patient'}
      </button>
    </form>
  </div>
}

export default Form