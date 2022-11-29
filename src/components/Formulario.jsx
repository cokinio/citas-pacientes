import React from 'react'

function Formulario() {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h1 className='font-black text-3xl text-center'>Seguimiento de pacientes</h1>
      <p className='text-lg mt-5 text-center mb-5'>Añade pacientes y {""}
        <span className='text-indigo-600 font-bold'>administralos</span>
      </p>
      <form className='bg-white shadow-md rounded-lg py-10 px-5'>
        <div>
          <label htmlFor="mascota" className='block text-gray-700 font-bold uppercase'>Nombre de mascota</label>
          <input id="mascota" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' type="text" placeholder="ingrese nombre de mascota"></input>
        </div>
      </form>
    </div>
  )
}

export default Formulario
