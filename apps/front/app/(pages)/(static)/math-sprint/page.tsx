import CtaSection from "@/app/components/cta/cta-section"
import DivCircuitBg from "@/app/components/div-circuit-bg"
import { ImageStack } from "@/app/components/image-stack"
import { DumbbellIcon, ExamIcon } from "@mdm/ui";
import Link from "next/link";

const images = [
  {
    name: 'MathSprint contest',
    src: '/math_sprint/math_sprint_1.webp' 
  },
  {
    name: 'MathSprint contest',
    src: '/math_sprint/math_sprint_2.webp' 
  },
  {
    name: 'MathSprint contest',
    src: '/math_sprint/math_sprint_3.webp' 
  },
  {
    name: 'MathSprint contest',
    src: '/math_sprint/math_sprint_4.webp' 
  },
]

export default function MathSprintPage() {

  return (
    <DivCircuitBg classNameBgImage="opacity-50 -z-[8]">
      <div className="w-full flex flex-col items-center max-w-sm md:max-w-screen-xl px-5 xl:px-0 space-y-10 mb-20">
        <h1 className="text-center text-4xl font-bold drop-shadow-sm">
          <span className='font-literata text-[#F25C54]'>Math Sprint</span>
        </h1>

        <div
          className="flex flex-col w-full md:flex-row md:justify-between md:space-x-8 text-base"
        >
          <div className="w-full space-y-4 p-4">
            <h1 className='font-literata font-bold text-3xl'>Une compétition pour les esprits mathématiques affûtés</h1>
            <p className="text-lg">Maths Sprint est une épreuve de mathématiques conçue comme un véritable “sprint” intellectuel. Il s&apos;agit d&apos;un test sous forme de QCM destiné aux élèves du <span className="font-bold text-[#F0463D]">collège</span> et du <span className="font-bold text-[#F0463D]">lycée</span>, les plaçant face à une série de questions mathématiques originales et stimulantes.</p>
            <p className="text-lg">En une heure, les participant·es doivent répondre à plusieurs questions qui ne requièrent pas une maîtrise approfondie du programme scolaire, mais plutôt l&apos;utilisation astucieuse d&apos;outils mathématiques simples et d&apos;une réflexion logique efficace.</p>
          </div>

          <div className="w-full z-0">
            <ImageStack
              images={images}
              autoplay={true}
            />
          </div>
        </div>

        <div
          className="flex flex-col w-full md:flex-row md:justify-between md:space-x-8 text-base"
        >
          <div className="w-full space-y-4 p-4">
            <h1 className='font-literata font-bold text-3xl'>Comment se déroulera la compétition ?</h1>
            
            <div>
              <p className="text-lg">La compétition se déroule en <span className="text-[#F0463D] font-bold">2</span> étapes:</p>
              <ul className="text-lg list-disc ml-4">
                <li>Une phase de présélection où les candidat·es doivent rendre un devoir, au plus tard le <span className="text-[#F0463D] font-bold">9 mars, impérativement écrit à la main</span> sous peine de rejet de la candidature. Le devoir sera mis en ligne le <span className="text-[#F0463D] font-bold">5 mars</span>.</li>
                <li>À l&apos;issue de cette phase, un nombre limité de candidat·es sera sélectionné pour participer à l&apos;épreuve finale en présentiel, organisée sur le campus de l&apos;<span className="text-[#F0463D] font-bold">UEMF à Fès</span> lors du <span className="text-[#F0463D] font-bold">Moroccan Day of Mathematics 2026</span>. L&apos;épreuve finale consiste en un QCM d&apos;une heure, avec des sujets <span className="text-[#F0463D] font-bold">distincts</span> pour les collégien·nes et les lycéen·nes.</li>
              </ul>
            </div>

            <p className="text-lg">La clôture des inscriptions sera le <span className="text-[#F0463D] font-bold">5 mars</span>. Sauf problème technique de notre part, aucune extension de la deadline n&apos;est possible. </p>
          </div>

          <div className="w-full space-y-4 p-4">
            <h1 className='font-literata font-bold text-3xl'>Quels sujets concernent l'épreuve ?</h1>
            
            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <Link href='https://drive.google.com/file/d/1oG592RsHhdLEnlkb1ibhtdFTMp8JGcfR/view?usp=sharing' target="_blank">
                <div 
                  className="h-[8rem] w-[9rem] bg-white border-b-4 border-b-red-500 border-2 shadow-md flex justify-center items-center rounded-md hover:cursor-pointer"
                > 
                  <div className="flex flex-col items-center text-center">
                    <span className="font-bold">Syllabus Collège</span>
                    <ExamIcon className="h-[4rem]"/>
                  </div>
                </div>
              </Link>

              <Link href='https://drive.google.com/file/d/1NEpyPsLgbNPHhAJM-IIoV2wlQ8st0kWT/view?usp=sharing' target="_blank">
                <div 
                  className="h-[8rem] w-[9rem] bg-white border-b-4 border-b-red-500 border-2 shadow-md flex justify-center items-center rounded-md hover:cursor-pointer"
                > 
                  <div className="flex flex-col items-center text-center">
                    <span className="font-bold">Syllabus Lycée</span>
                    <ExamIcon className="h-[4rem]"/>
                  </div>
                </div>
              </Link>

              <Link href='https://www.mathraining.be/' target="_blank">
                <div 
                  className="h-[8rem] w-[9rem] bg-white border-b-4 border-b-red-500 border-2 shadow-md flex justify-center items-center rounded-md hover:cursor-pointer"
                > 
                  <div className="flex flex-col items-center text-center">
                    <span className="font-bold">Entraînement</span>
                    <DumbbellIcon className="h-[4rem]"/>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <CtaSection />
      </div>
    </DivCircuitBg>
  )
}