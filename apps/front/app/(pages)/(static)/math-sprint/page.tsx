import CtaSection from "@/app/components/cta-section"
import DivCircuitBg from "@/app/components/div-circuit-bg"
import { ImageStack } from "@/app/components/image-stack"

const images = [
  {
    name: 'MathSprint contest',
    src: '/past-edition/mathsprint_1.webp' 
  },
  {
    name: 'MathSprint contest',
    src: '/past-edition/mathsprint_2.webp'
  },
]

export default function MathSprintPage() {

  return (
    <DivCircuitBg classNameBgImage="opacity-50 -z-[8]">
      <div className="w-full flex flex-col items-center max-w-sm md:max-w-screen-xl px-5 xl:px-0 space-y-10 mb-20">
        <h1 className="text-center text-4xl font-bold drop-shadow-sm">
          <span className='bg-gradient-to-br from-sky-600 to-[#1C55FF] inline-block text-transparent bg-clip-text'>Math Sprint</span>
        </h1>

        <div
          className="flex flex-col w-full md:flex-row md:justify-between md:space-x-8 text-base"
        >
          <div className="w-full space-y-4 p-4">
            <h1 className='font-bold text-3xl'>Une compétition pour les esprits mathématiques affûtés</h1>
            <p className="text-lg">C&apos;est une compétition mathématique individuelle d&apos;une heure sous forme de QCM</p>
            <p className="text-lg">Pour cette année, on a <span className="font-bold">2 nouveautés</span>:
              <ul className="list-disc">
                <li>Il y aura deux épreuves MathSprint: une pour les <span className="font-bold text-[#1C55FF]">collègiens</span> et une pour les <span className="font-bold text-[#1C55FF]">lycéens</span></li>
                <li>Les meilleures performances dans chaque épreuve vont pouvoir accéder à une <span className="font-bold">épreuve finale</span> à exercices ouverts pour tous les niveaux</li>
              </ul>
            </p>
          </div>

          <div className="w-full -z-[6]">
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
            <p className='font-bold text-sm text-[#1C55FF]'>La séléction</p>
            <h1 className='font-bold text-3xl'>Comment se passera la selection ?</h1>
            <p className="text-lg">Avant de pouvoir participer à cette compétition, un test de sélection sera mené pour évaluer le niveau des potentiels participants</p>
            <p className="text-lg">Le test sera effectué sur une <span className="font-semibold text-gray-800">plateforme en ligne</span> sous la forme d'un QCM surveillé par caméra</p>
          </div>

          <div className="w-full space-y-4 p-4">
            <p className='font-bold text-sm text-[#1C55FF]'>Le sylabus</p>
            <h1 className='font-bold text-3xl'>Quels sujets concernent l'épreuve ?</h1>
          </div>
        </div>

        <CtaSection />
      </div>
    </DivCircuitBg>
  )
}