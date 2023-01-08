import React from 'react'

function ListadoPacientes() {
  return (
    <div className='md:w-1/2 lg:w-2/3'>
      <h1 className='font-black text-3xl text-center'>Listado Pacientes</h1>
      <p className='text-xl mt-5 mb-10 text-center'>Administra tus {''}
      <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
      </p>
      <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Nombre:{''}
          <span className='font-normal normal-case'>Hook</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Propietario:{''}
          <span className='font-normal normal-case'>Juan</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          E-mail:{''}
          <span className='font-normal normal-case'>pepe@gmail.com</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Fecha de alta:{''}
          <span className='font-normal normal-case'>10 de diciembre</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Sintomas:{''}
          <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, unde facere. Qui nobis laborum iusto, ea inventore doloremque modi voluptatem fugit culpa neque soluta facilis eum autem vitae aperiam corporis?</span>
        </p>
      </div>
    </div>

    
  )
}

export default ListadoPacientes
