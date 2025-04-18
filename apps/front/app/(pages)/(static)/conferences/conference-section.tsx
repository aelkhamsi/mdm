import React from 'react'

const ConferenceSection = () => {
  return (
    <div
      className="bg-white shadow-md rounded-lg animate-fade-up opacity-0"
      style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
    >

      <h1
        className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-3xl font-bold  drop-shadow-sm [text-wrap:balance] md:text-4xl mb-8"
      >
        Conférence
      </h1>

      
      <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-14 p-4'>
        <div className='h-3/4 w-3/4 md:[24rem] md:w-[24rem]'>
          <img
            src='/speakers/abdelhaq_el_jai.jpeg'
          />
        </div>

        <div className='space-y-2'>
          <div className='text-2xl font-semibold'>Abdelhaq EL JAI</div>
          <ul className="list-disc">
            <li className='text-lg font-light'>Docteur en Mathématiques appliquées et Automatiques à <span className='font-medium'>l&apos;université Paul Sabatier de Toulouse.</span></li>
            <li className='text-lg font-light'><span className='font-medium'>Professeur Émérite</span> des Universités, France.</li>
            <li className='text-lg font-light'>Membre résident de l&apos;Académie <span className='font-medium'>Hassan II des Sciences et Techniques du Royaume du Maroc.</span> des Universités, France.</li>
            <li className='text-lg font-light'><span className='font-medium'>Coordinateur du réseau </span> de recherche <span className='font-medium'>TDS (Théorie des Systèmes)</span> depuis 1985.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ConferenceSection
