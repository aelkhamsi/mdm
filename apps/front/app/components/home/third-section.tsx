import React from 'react'

const ThirdSection = () => {
  return (
    <>
      {/* Transition border */}
      <div className="relative w-full flex justify-between -mt-11 h-11">
        <div className="mr-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-gray-950"></div>
        <div className="flex justify-between mx-auto w-full px-[1.6rem] sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem]">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,100 0,0 100,100" fill="#030712" />
            <polygon points="100,0 0,0 100,100" fill="#F5F7F9" />
          </svg>

          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 100,0 0,100" fill="#F5F7F9" />
            <polygon points="100,100 100,0 0,100" fill="#030712" />
          </svg>
        </div>
        <div className="ml-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-gray-950"></div>
      </div>

      {/* Content */}
      <div className='relative isolate overflow-hidden w-full flex flex-col justify-center items-center py-24 bg-gray-950'>
        <div className="w-full max-w-screen-xl text-white">
          Achraf
        </div>
      </div>

      {/* Transition border */}
      <div className="relative w-full flex justify-between h-11">
        <div className="mr-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-gray-950 z-10"></div>
        <div className="flex justify-between mx-auto w-full px-[1.6rem] sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem]">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 100,0 0,100" fill="#030712" /> 
            <polygon points="100,100 100,0 0,100" fill="#FFF" />
          </svg>
          
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,100 0,0 100,100" fill="#FFF" />
            <polygon points="100,0 0,0 100,100" fill="#030712" />
          </svg>
        </div>
        <div className="ml-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-gray-950"></div>
      </div>
    </>
  )
}

export default ThirdSection
