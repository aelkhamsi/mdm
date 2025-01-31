import DivCircuitBg from "@/app/components/div-circuit-bg"
import { GlitterIcon, LightbulbIcon, PlayButtonIcon, StarShineIcon } from "@mdm/ui"
import CtaSection from "@/app/components/cta/cta-section"

export default function BestMathVideoPage() {

  return (
    <DivCircuitBg classNameBgImage="opacity-50 -z-[8]">
      <div className="flex flex-col items-center w-full lg:w-3/4 px-5 lg:px-0 space-y-14 mb-20">
        <div className="space-y-4">
          <h1 className="text-center text-4xl font-bold drop-shadow-sm">
            <span className='bg-gradient-to-br from-sky-600 to-[#1C55FF] inline-block text-transparent bg-clip-text'>
              Best Mathematical Video
            </span>
          </h1>

          <div
            className="w-full lg-w-3/4 text-xl text-center"
          >
            Les mathématiques sont partout autour de nous, souvent cachées dans les subtilités de la vie quotidienne. <br/> 
            Nous vous invitons donc à devenir notre guide à travers ce monde captivant!
          </div>
        </div>
        
        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 text-base"
        >
          <div className="w-full space-y-4 p-10 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <div className="flex justify-center">
              <div className="w-fit p-[10px] bg-[#1C55FF] rounded-full">
                <PlayButtonIcon className="h-8 w-8"/>
              </div>
            </div>

            <h1 className='text-center font-bold text-2xl'>Partagez votre passion</h1>
            <p className="text-center text-lg">Réalisez de <span className="font-bold text-[#557fff]">manière individuelle</span> une vidéo originale de <span className="font-bold text-[#557fff]">4 minutes maximum</span> où vous expliquez un concept mathématique de votre choix.</p>
          </div>

          <div className="w-full space-y-4 p-10 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <div className="flex justify-center">
              <div className="w-fit p-[10px] bg-[#1C55FF] rounded-full">
                <StarShineIcon className="h-8 w-8"/>
              </div>
            </div>

            <h1 className='text-center font-bold text-2xl'>Choisissez un sujet fascinant</h1>
            <p className="text-center text-lg">Une notion de géométrie, une formule algébrique,une démonstration créative. Soyez imaginatifs et rendez ce concept accessible pour le public</p>
          </div>

          <div className="w-full space-y-4 p-10 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <div className="flex justify-center">
              <div className="w-fit p-[10px] bg-[#1C55FF] rounded-full">
                <LightbulbIcon className="h-8 w-8"/>
              </div>
            </div>

            <h1 className='text-center font-bold text-2xl'>Illustrez vos concepts</h1>
            
            <p className="text-center text-lg">
              Utilisez des exemples concrets, des animations, des illustrations ou des histoires pour rendre votre explication vivante et mémorable.
            </p>
          </div>

          <div className="w-full space-y-4 p-10 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <div className="flex justify-center">
              <div className="w-fit p-[10px] bg-[#1C55FF] rounded-full">
                <GlitterIcon className="h-8 w-8"/>
              </div>
            </div>

            <h1 className='text-center font-bold text-2xl'>Soyez créatif</h1>
            <p className="text-center text-lg">
              Laissez libre court à votre créativité!
              Il s&apos;agit de vulgariser un concept mathématique de manière ludique et intéressante, pas de donner un cours.</p>
          </div>
        </div>

        <div
          className="flex flex-col w-full md:flex-row md:justify-between md:space-x-8 text-base"
        >
          <div className="w-full space-y-4 p-4">
            <p className='font-bold text-sm text-[#1C55FF]'>L&apos;évaluation</p>
            <h1 className='font-bold text-3xl'>Quels sont les critères d&apos;évaluation ?</h1>
            <p className="text-lg">
              <ul className="list-disc ml-4">
                <li>Exactitude du contenu mathématique</li>
                <li>Clarté et fluidité</li>
                <li>Présentation</li>
                <li>Créativité</li>
                <li>Engagement et interactivité</li>
                <li>Élimination directe suite à l&apos;usage excessif d&apos;IA</li>
              </ul>
            </p>
          </div>

          <div className="w-full space-y-4 p-4">
            <p className='font-bold text-sm text-[#1C55FF]'>Consignes</p>
            <h1 className='font-bold text-3xl'>Quelques consignes</h1>
            <p className="text-lg">
              <ul className="list-disc ml-4">
                <li>
                  L&apos;<span className="font-bold text-[#1C55FF]">arabe</span>, la <span className="font-bold text-[#1C55FF]">Darija marocaine</span>, le <span className="font-bold text-[#1C55FF]">français</span> et l&apos;<span className="font-bold text-[#1C55FF]">anglais</span> sont autorisés comme langues de la vidéo.
                </li>
                <li>Toute vulgarisation simple de l&apos;histoire du concept seule ne sera pas acceptée. Nous vous invitons à expliquer les concepts par des démonstrations bien faites.</li>
                <li>L&apos;usage de l&apos;IA en cas de besoin doit être modéré.</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full lg:w-3/4 space-y-6">
          <div className="text-7xl text-center">🏆</div>
          <div className="text-3xl font-bold text-center lg:w-3/4">
            Des récompenses attendent les vidéos les plus instructives et interactives !
          </div>
          <div className="text-xl text-center">
            Le visionnage des vidéos sélectionnées, l&apos;annonce des gagnants et la remise des prix auront lieu pendant la journée marocaine des mathématiques.<br/>
            Nous nous réjouissons de découvrir et d&apos;apprendre à vos côtés les merveilles des mathématiques!
          </div>
        </div>

        <CtaSection />
      </div>
    </DivCircuitBg>
  )
}