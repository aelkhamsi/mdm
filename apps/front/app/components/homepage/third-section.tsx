import { Card } from '@/app/components/card';

const ThirdSection = () => {
  return (
    <>
      {/* Transition border */}
      <div className="relative w-full flex justify-between -mt-11 h-11">
        <div className="mr-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-[#030712]"></div>
        <div className="flex justify-between mx-auto w-full px-[1.6rem] sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem]">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,100 0,0 100,100" fill="#030712" />
            <polygon points="100,0 0,0 100,100" fill="#FFFFFF" />
          </svg>

          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 100,0 0,100" fill="#FFFFFF" />
            <polygon points="100,100 100,0 0,100" fill="#030712" />
          </svg>
        </div>
        <div className="ml-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-[#030712]"></div>
      </div>

      {/* Content */}
      <div className='relative isolate overflow-hidden w-full flex flex-col justify-center items-center py-14 bg-[#030712] text-white'>
        <h1 className='text-3xl text-center font-bold'>
          Activités & Compétitions
        </h1>

        <div className='max-w-screen-sm text-base text-center my-6 p-4 xl:p-0'>
          Découvrez le programme captivant de compétitions, d'activités et de conférences qui vous attend cette année !
        </div>

        <div
          className="w-full lg:w-3/4 lg:px-10 text-sm my-4"
        >
          <div className='w-full p-4'>
            <div className='text-center font-bold text-[#E5FF52] p-6'>
              Activités
            </div>
            
            <hr className='border-[#E5FF52] mx-4 my-4' />

            <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4 text-center">
              <Card className='h-[10rem] w-[10rem]' href='conferences'>
                Conférences
              </Card>
              <Card className='h-[10rem] w-[10rem]' href='stands'>
                Stands
              </Card>
              <Card className='h-[10rem] w-[10rem]' href='workshops'>
                Workshops
              </Card>
              <Card className='h-[10rem] w-[10rem]' href='musee-des-maths'>
                Musée des maths
              </Card>
            </div>
          </div>

          <div className='w-full p-4'>
            <div className='text-center font-bold text-[#1C55FF] p-6'>
              Compétitions
            </div>

            <hr className='border-[#1C55FF] mx-4 my-4' />

            <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4 text-center">
              <Card className='h-[10rem] w-[10rem]' href='math-sprint'>
                Math Sprint
              </Card>
              <Card className='h-[10rem] w-[10rem]' href='stands'>
                Meilleur Stand
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Transition border */}
      <div className="relative w-full flex justify-between h-11">
        <div className="mr-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-[#030712] z-10"></div>
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
        <div className="ml-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-[#030712]"></div>
      </div>
    </>
  )
}

export default ThirdSection
