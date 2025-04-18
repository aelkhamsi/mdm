import React from 'react'

const PanelSection = () => {
  return (
    <div
      className="bg-white shadow-md rounded-lg animate-fade-up opacity-0"
      style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
    >

      <h1
        className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-3xl font-bold  drop-shadow-sm [text-wrap:balance] md:text-4xl mb-8"
      >
        Panel
      </h1>
      <div className="flex flex-col items-center gap-y-4 md:flex-row md:justify-around md:items-start py-4">
        <div className="flex flex-col space-y-4 h-3/4 w-3/4 md:h-1/4 md:w-1/4">
          <>
            <img
              src='/speakers/mohamed_amine_khamsi.jpeg'
            />
          </>

          <div className='flex flex-col mb-4 md:mb-0'>
            <div className='text-2xl font-semibold'>Mohamed Amine KHAMSI</div>
            <ul className="list-disc">
              <li className='text-lg font-light'>Professeur en Mathématiques à l&apos;Université Khalifa, Abu Dhabi.</li>
              <li className='text-lg font-light'>Expert en Théorie du <span className='font-medium'>Point fixe</span> et en <span className='font-medium'>Analyse fonctionnelle non linéaire</span>.</li>
            </ul>
            
          </div>
        </div>

        <div className="flex flex-col space-y-4 h-3/4 w-3/4 md:h-1/4 md:w-1/4">
          <div className="">
            <img
              src='/speakers/amina_benaceur.png'
            />
          </div>

          <div className='flex flex-col mb-4 md:mb-0'>
            <div className='text-2xl font-semibold'>Amina BENACEUR</div>
            <ul className="list-disc">
              <li className='text-lg font-light'>Ingénieure et Mathématicienne appliquée de formation.</li>
              <li className='text-lg font-light'>Professeure assistante en Mathématiques à <span className='font-medium'>UM6P</span></li>
              <li className='text-lg font-light'>Post-doctorante à <span className='font-medium'>MIT</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col space-y-4 h-3/4 w-3/4 md:h-1/4 md:w-1/4">
          <div className="">
            <img
              src='/speakers/ahmed_assalih.jpeg'
            />
          </div>

          <div className='flex flex-col mb-4 md:mb-0'>
            <div className='text-2xl font-semibold'>Ahmed ASSALIH</div>
            <ul className="list-disc">
              <li className='text-lg font-light'>Ancien représentant du Maroc aux <span className='font-medium'>Olympiades internationles</span> de Mathématiques.</li>
              <li className='text-lg font-light'>Directeur de la <span className='font-medium'>transformation digitale RH</span> chez <span className='font-medium'>Sopra HR Software</span>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanelSection
