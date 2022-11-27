function Modal({deletePatient, setShowModal, setPatient}) {
    const handleReturn = ()=>{
        setPatient({})
        setShowModal(false)
    }

    return (
        <div className="flex flex-col justify-between w-2/3 md:w-2/5 bg-slate-300 rounded-lg mx-auto">
            <p className="uppercase text-teal-500 p-4 text-center">Are you sure do you want to remove the patient from the list</p>
            
            <div className="flex flex-row justify-around px-4 pb-4">
                <button
                    onClick={handleReturn}
                    type="button"
                    className="bg-green-200 uppercase text-teal-500 text-1xl h-10 w-1/3 rounded-md hover:bg-green-400 hover:text-teal-100">
                    Return
                </button>

                <button
                    onClick={deletePatient}
                    type="button"
                    className="bg-red-300 uppercase text-teal-500 text-1xl h-10 w-1/3 rounded-md hover:bg-red-400 hover:text-teal-100">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Modal