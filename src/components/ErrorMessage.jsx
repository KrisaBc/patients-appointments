import React from 'react'

function ErrorMessage({ children }) {
    return (
        <div className="p-4 bg-red-400 mb-4 text-white uppercase text-center">
           {children}
        </div>
    )
}

export default ErrorMessage

