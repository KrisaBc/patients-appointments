
function Patient({ patient, setPatient, setShowModal }) {

    const { name, date, email, symptoms, id } = patient

    const handleDeletePatient = () => {
        setPatient(patient)
        setShowModal(true)
    }

    return <div className="shadow-md mt-5 p-5 rounded-lg bg-slate-100">
        <p className="text-teal-500 mb-2">
            NAME: <span className="text-slate-500">{name}</span>
        </p>

        <p className="text-teal-500 mb-2">
            REGISTER DATE: <span className="text-slate-500">{date}</span>
        </p>

        <p className="text-teal-500 mb-2">
            EMAIL: <span className="text-slate-500">{email}</span>
        </p>

        <p className="text-teal-500">
            SYMPTOMS: <span className="text-slate-500">{symptoms}</span>
        </p>

        <div className="flex flex-row justify-between mt-3">
            <button
                onClick={handleDeletePatient}
                type="button"
                className="bg-green-200 uppercase text-teal-500 
        text-1xl h-10 w-1/3 rounded-md hover:bg-red-400 hover:text-teal-100">
                Delete
            </button>

            <button
                onClick={() => setPatient(patient)}
                type="button"
                className="bg-green-200 uppercase text-teal-500 
        text-1xl h-10 w-1/3 rounded-md hover:bg-green-400 hover:text-teal-100">
                Edit
            </button>
        </div>

    </div>
}

export default Patient