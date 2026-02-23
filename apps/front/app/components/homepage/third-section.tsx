import { Card } from '@/app/components/card';

const ThirdSection = () => {
  return (
    <>
      {/* Transition border */}
      <div className="relative w-full flex justify-between -mt-11 h-11">
        <div className="mr-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-[#F9F6EE]"></div>
        <div className="flex justify-between mx-auto w-full px-[1.6rem] sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem]">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,100 0,0 100,100" fill="#F9F6EE" />
            <polygon points="100,0 0,0 100,100" fill="#21251c" />
          </svg>

          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 100,0 0,100" fill="#121212" />
            <polygon points="100,100 100,0 0,100" fill="#F9F6EE" />
          </svg>
        </div>
        <div className="ml-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-[#F9F6EE]"></div>
      </div>

      {/* Content */}
      <div className='relative w-full flex flex-col justify-center items-center text-lg py-14'>
        <h1 className='text-3xl text-center font-bold'>
          Activités & Compétitions
        </h1>

        <div className='max-w-screen-sm text-center my-6 p-4 xl:p-0'>
          Découvrez le programme captivant de compétitions, d'activités et de conférences qui vous attend cette année !
        </div>

        <div
          className="w-full lg:w-3/4 lg:px-10 my-4"
        >
          <div className='w-full p-4'>
            <div className='text-center font-bold text-[#F25C54] p-6'>
              Activités
            </div>
            
            <div className="w-full h-px my-4 bg-gradient-to-r from-transparent via-[#F25C54] to-transparent"></div>

            <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4 text-center">
              <Card className='h-[10rem] w-[10rem]' href='conferences' color='black'>
                Conférences
              </Card>
              <Card className='h-[10rem] w-[10rem]' href='stands' color='black'>
                Stands
              </Card>
              <Card className='h-[10rem] w-[10rem]' href='workshops' color='black'>
                Workshops
              </Card>
              <Card className='h-[10rem] w-[10rem]' href='musee-des-maths' color='black'>
                Musée des maths
              </Card>
            </div>
          </div>

          <div className='w-full p-4'>
            <div className='text-center font-bold text-[#1A1F3A] p-6'>
              Compétitions
            </div>

            <div className="w-full h-px my-4 bg-gradient-to-r from-transparent via-[#1A1F3A] to-transparent"></div>

            <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4 text-center">
              <Card className='h-[10rem] w-[10rem]' href='math-sprint' color='black'>
                Math Sprint
              </Card>
              <Card className='h-[10rem] w-[10rem]' href='stands' color='black'>
                Meilleur Stand
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Transition border */}
      {/* <div className="relative w-full flex justify-between h-11">
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
      </div> */}
    </>
  )
}

export default ThirdSection
