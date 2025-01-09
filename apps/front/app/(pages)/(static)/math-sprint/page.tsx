import DivCircuitBg from "@/app/components/div-circuit-bg"
import { ImageStack } from "@/app/components/image-stack"

const images = [
  {
    name: '4',
    src: '/past-edition/4.jpeg' 
  },
  {
    name: '5',
    src: '/past-edition/5.jpeg' 
  },
]

export default function MathSprintPage() {

  return (
    <DivCircuitBg classNameBgImage="opacity-50">
      <div className="w-full max-w-sm md:max-w-screen-xl px-5 xl:px-0 space-y-14">
        <h1 className="text-center text-4xl font-bold drop-shadow-sm">
          <span className='bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text'>Math Sprint</span>
        </h1>

        <div
          className="flex flex-col w-full md:flex-row md:justify-between md:space-x-8 text-base"
        >
          <div className="w-full space-y-4 p-4">
            <p className='font-bold text-xs text-cyan-600'>C'est quoi Math Sprint</p>
            <h1 className='font-bold text-3xl'>Une compétition pour les esprits mathématiques affûtés</h1>
            <p className="text-lg">C&apos;est une compétition mathématique individuelle d&apos;une heure sous forme de QCM</p>
            <p className="text-lg">Pour cette année, on a deux nouveautés:
              <ul className="list-disc">
                <li>Il y aura deux épreuves MathSprint: une pour les collègiens et une pour les lycéens</li>
                <li>Les meilleures performances dans chaque épreuve vont pouvoir accéder à une épreuve finale à exercices ouverts pour tout les niveaux</li>
              </ul>
            </p>
          </div>

          <div className="w-full">
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
            <p className='font-bold text-xs text-cyan-600'>La séléction</p>
            <p className="text-lg">Avant de pouvoir participer à cette compétition, un test de séléction sera mené pour évaluer le niveaux des potentiels participants</p>
            <p className="text-lg">
              La procédure retenue sera choisie ultérieurement parmi les options suivantes:
              <ul className="list-disc">
                <li><span className="font-bold">Plateforme en ligne: </span> Le test sera effectué sur une plateforme en ligne sous la forme d'un QCM surveillé par caméra</li>
                <li><span className="font-bold">Entretien individuel: </span> Les candidats vont être contacté pour passer un entretien individuel en ligne. Les examinateurs évalueront la capacité à résoudre des questions de logique et de mathématiques</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </DivCircuitBg>
  )
}