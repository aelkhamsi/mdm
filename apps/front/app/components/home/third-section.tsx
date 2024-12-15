import { Card } from '@/app/components/card';

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
      <div className='relative isolate overflow-hidden w-full flex flex-col justify-center items-center py-14 bg-gray-950 text-white'>
        <h1 className='text-4xl text-center font-bold'>
          Activités & Conférences
        </h1>

        <div className='max-w-screen-sm text-sm text-center my-6 p-4 xl:p-0'>
          Discover the exciting lineup of competitions, activities, and conferences that await you at this year's mathematics competition, where learning meets challenge and inspiration!
        </div>

        <div
          className="md:flex w-full max-w-screen-xl text-sm my-4"
        >
          <div className='w-full'>
            <div className='text-center font-bold text-cyan-300 p-6'>
              Compétitions
            </div>

            <div className="flex text-center space-x-6 px-14">
              <Card title='Math Sprint' />
              <Card title='Best Mathematical Video' />
            </div>
          </div>

          <div className='w-full'>
            <div className='text-center font-bold text-purple-400 p-6'>
              Activités
            </div>

            <div className="flex space-x-6 px-14">
              <Card title='Conférences'/>
              <Card title='Stands' />
            </div>
          </div>
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
