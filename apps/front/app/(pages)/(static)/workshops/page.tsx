import CtaSection from "@/app/components/cta/cta-section"
import DivCircuitBg from "@/app/components/div-circuit-bg"
import { ImageStack } from "@/app/components/image-stack"
import { GlitterIcon, LightbulbIcon, PlayButtonIcon, StarShineIcon } from "@mdm/ui";

const images = [
  {
    name: 'MathSprint contest',
    src: '/workshops/workshops_1.webp' 
  },
  {
    name: 'MathSprint contest',
    src: '/workshops/workshops_2.webp' 
  }
]

export default function MathSprintPage() {

  return (
    <DivCircuitBg classNameBgImage="opacity-50 -z-[8]">
      <div className="w-full flex flex-col items-center max-w-screen-xl px-5 xl:px-0 space-y-10 mb-20">
        <h1 className="text-center text-4xl font-bold drop-shadow-sm">
          <span className='font-literata text-[#F25C54]'>Workshops</span>
        </h1>

        <div
          className="flex flex-col w-full md:flex-row md:justify-between md:space-x-8 text-base"
        >
          <div className="w-full space-y-4 p-4">
            <h1 className='font-bold font-literata text-3xl'>Workshops – Pour tous les âges et tous les niveaux</h1>
            <p className="text-lg">Tout au long de la journée, nous proposons une série de workshops interactifs autour des mathématiques, adaptés à chaque tranche d&apos;âge et à chaque niveau. Chaque workshop est dédié à un public spécifique afin de garantir un contenu adapté, ludique et enrichissant.</p>
          </div>

          <div className="w-full z-0">
            <ImageStack
              images={images}
              autoplay={true}
            />
          </div>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-base"
        >
          <div className="w-full space-y-4 p-6 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <div className="flex justify-center">
              <div className="w-fit p-[10px] bg-[#F25C54] rounded-full">
                <PlayButtonIcon className="h-8 w-8"/>
              </div>
            </div>

            <h1 className='text-center font-bold font-literata text-2xl'>Workshop d&apos;orientation – Lycéens</h1>

            <div>
              <p className="text-lg mb-4">Que faire après le baccalauréat dans un monde bouleversé par l&apos;IA?</p>
              <p className="text-lg mb-4">Ce workshop s&apos;adresse aux lycéens souhaitant réfléchir à leur orientation après le bac. Il propose un temps d&apos;échange autour des des métiers liés aux mathématiques.</p>
              <p className="text-lg">L&apos;objectif est de:</p>
              <ul className="text-lg list-disc ml-4">
                <li>Mieux comprendre les parcours possibles après le lycée</li>
                <li>Découvrir les débouchés liés aux mathématiques</li>
                <li>Poser ses questions et échanger avec des intervenants</li>
              </ul>
            </div>
          </div>

          <div className="w-full space-y-4 p-6 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <div className="flex justify-center">
              <div className="w-fit p-[10px] bg-[#F25C54] rounded-full">
                <StarShineIcon className="h-8 w-8"/>
              </div>
            </div>

            <h1 className='text-center font-bold font-literata text-2xl'>Workshop primaire – Enfants et parents</h1>
            <div>
              <p className="text-lg mb-4">Un atelier ludique et interactif destiné aux élèves du primaires qui sont curieux et intéressés par les mathématiques, ainsi qu&apos;aux parents souhaitant éveiller l&apos;intérêt de leurs enfants pour cette discipline.</p>
              <p className="text-lg">À travers des énigmes, jeux et défis stimulants, les élèves découvrent les mathématiques de manière amusante et développent leur logique et leur créativité.</p>
            </div>
          </div>

          <div className="w-full space-y-4 p-6 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <div className="flex justify-center">
              <div className="w-fit p-[10px] bg-[#F25C54] rounded-full">
                <LightbulbIcon className="h-8 w-8"/>
              </div>
            </div>

            <h1 className='text-center font-bold font-literata text-2xl'>Workshop collégiens – Explorer, comprendre, s&apos;épanouir</h1>
            
            <div>
              <p className="text-lg mb-4">Ce workshop est destiné aux collégiens souhaitant découvrir tout ce que le collège et le lycée peuvent offrir au-delà des cours.</p>
              <p className="text-lg">Les participants pourront:</p>
              <ul className="text-lg list-disc ml-4">
                <li>Découvrir les olympiades de mathématiques et échanger avec d'anciens participants aux Olympiades.</li>
                <li>Comprendre comment développer un esprit scientifique : curiosité, raisonnement, esprit critique</li>
                <li>Apprendre à profiter pleinement de leurs années au collège et à se préparer sereinement au lycée</li>
              </ul>
            </div>
          </div>

          <div className="w-full space-y-4 p-6 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <div className="flex justify-center">
              <div className="w-fit p-[10px] bg-[#F25C54] rounded-full">
                <GlitterIcon className="h-8 w-8"/>
              </div>
            </div>

            <h1 className='text-center font-bold font-literata text-2xl'>Workshops scientifiques – Lycéens (Bac) et post-bac</h1>
            <div>
              <p className="text-lg mb-4">Ces workshops s&apos;adressent aux élèves du bac et aux étudiants post-bac intéressés par des sujets scientifiques en lien avec les mathématiques.</p>
              <p className="text-lg">Dans le menu:</p>
              <ul className="text-lg list-disc ml-4">
                <li>Ateliers thématiques autour de concepts mathématiques</li>
                <li>Applications concrètes en sciences, technologie ou recherche</li>
                <li>Les thématiques seront bientôt annoncés</li>
              </ul>
            </div>
          </div>
        </div>


        <CtaSection />
      </div>
    </DivCircuitBg>
  )
}