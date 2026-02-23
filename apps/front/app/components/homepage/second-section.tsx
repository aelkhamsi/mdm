import { CalendarMDMIcon, CustomPlusIcon, LocationIcon } from '@mdm/ui'
import { ImageStack } from '../image-stack'

const images = [
  {
    name: 'MDM conference',
    src: '/homepage/homepage_1.webp' 
  },
  {
    name: 'MDM conference',
    src: '/homepage/homepage_2.webp' 
  },
  {
    name: 'MDM conference',
    src: '/homepage/homepage_3.webp' 
  },
  {
    name: 'MathSprint contest',
    src: '/homepage/homepage_4.webp' 
  },
  {
    name: 'MathSprint contest',
    src: '/homepage/homepage_5.webp'
  },
]

const SecondSection = () => {
  return (    
    <div className='w-full flex flex-col justify-center items-center pt-14 pb-32 space-y-20 text-lg text-white bg-[#121212]'>
      <div
        className="relative flex flex-col w-full md:flex-row md:justify-between md:space-x-8 lg:w-3/4"
      >
        <CustomPlusIcon className={`absolute h-8 w-8 -top-10 -left-4 text-[#F25C54]`} />
        <div className="absolute -top-6 -left-8 h-px w-full bg-gradient-to-r from-[#CBFF8C] to-transparent"></div>
        <div className="absolute -top-6 -left-8 w-px h-full bg-gradient-to-b from-[#CBFF8C] to-transparent"></div>

        <div className="w-full space-y-4 p-4">
          <p className='font-bold text-xs text-[#F25C54]'>C'est quoi MDM ?</p>
          <h1 className='font-bold text-3xl'>MDM, La grande rencontre des passionnés de mathématiques</h1>
          <p>Le &apos;<span className='font-bold'>Moroccan Day of Mathematics&apos; (MDM)</span> est un événement dédié aux passionnés de mathématiques, offrant un programme varié de compétitions et d’activités accessibles à tous les niveaux.</p>
          <p>Les participants pourront prendre part à différentes compétitions tout au long de la journée, tandis que conférences, stands et workshops permettront de découvrir diverses facettes des mathématiques. </p>
          <p>Ouvert aux adultes et aux enfants, cet événement vise à promouvoir l&apos;excellence mathématique et s&apos;adresse autant au grand public qu&apos;aux amateurs et spécialistes. </p>

          <div className='flex justify-center gap-x-8'>
            <div className='flex items-center justify-center'>
              <CalendarMDMIcon />
              <div className="text-sm font-semibold">28 mars 2026</div>
            </div>

            <div className='flex items-center justify-center' >
              <LocationIcon />
              <div className="text-sm font-semibold text-center">Université Euro-méditerranéenne <br/> de Fès</div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center">
          <ImageStack
            images={images}
            autoplay={true}
          />
        </div>
      </div>

      <h1 id="deadlines" className='text-3xl font-bold'>
        Retour sur MDM 2025
      </h1>

      <div
        className="relative flex flex-col md:flex-row md:justify-between md:space-x-8 w-full lg:w-3/4"
      >
        
        <CustomPlusIcon className={`absolute h-8 w-8 -bottom-12 -right-4 text-[#F25C54]`} />
        <div className="absolute -bottom-8 -left-8 h-px w-full bg-gradient-to-l from-[#CBFF8C] to-transparent"></div>
        <div className="absolute top-6 right-0 w-px h-full bg-gradient-to-t from-[#CBFF8C] to-transparent"></div>

        <div className="w-full flex flex-col px-4 space-y-4">
          <p>La dernière édition du MDM s&apos;est tenue à Fès, en collaboration avec l&apos;UEMF. Un événement qui a réuni étudiants, lycéens et curieux de tous les horizons autour de conférences inspirantes, de stands interactifs et de compétitions intenses</p>
          <p>En 2026, MDM revient de nouveau à Fès avec une ambition renouvelée ; de nouvelles activités, des intervenants de renom et une expérience accessible à tous,  quel que soit votre niveau en mathématiques.</p>
        </div>

        <div className='w-full flex justify-center p-4 md:p-0'>
          <div className="w-fit space-y-4 font-medium text-2xl">
            <p><span className='bg-gradient-to-br from-[#CBFF8C] via-[#CBFF8C] to-[#F25C54] inline-block text-transparent bg-clip-text'>1500+</span> Participants</p>
            <p><span className='bg-gradient-to-br from-[#CBFF8C] via-[#CBFF8C] to-[#F25C54] inline-block text-transparent bg-clip-text'>4</span> Speakers de renommée internationale</p>
            <p><span className='bg-gradient-to-br from-[#CBFF8C] via-[#CBFF8C] to-[#F25C54] inline-block text-transparent bg-clip-text'>4</span> Workshops immersifs</p>
            <p><span className='bg-gradient-to-br from-[#CBFF8C] via-[#CBFF8C] to-[#F25C54] inline-block text-transparent bg-clip-text'>20</span> Stands interactifs</p>
            <p><span className='bg-gradient-to-br from-[#CBFF8C] via-[#CBFF8C] to-[#F25C54] inline-block text-transparent bg-clip-text'>20&apos;000 MAD</span> en prix</p>
          </div>
        </div>
      </div>

      <div
        className="w-full lg:w-3/4 flex flex-col text-center items-center justify-around space-y-4 animate-fade-up opacity-0 backdrop-blur-md border border-[#F25C54] rounded-xl shadow-sm py-2"
        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
      >
        <div><span className='font-medium text-[#F25C54]'>Date limite pour l&apos;inscription</span> selon votre choix de participation</div>

        <div className='w-full lg:w-3/4 flex justify-center'>
          <div className='w-1/3 '><span className='font-bold'>5 mars</span><br/>Math Sprint</div>
          <div className='w-1/3 '><span className='font-bold'>8 mars</span><br/>Animation Stand</div>
          <div className='w-1/3 '><span className='font-bold'>26 mars</span><br/>Visiteurs</div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
