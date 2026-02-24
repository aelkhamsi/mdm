import CtaSection from "@/app/components/cta/cta-section"
import DivCircuitBg from "@/app/components/div-circuit-bg"
import { AwardIcon, BoardGamesIcon, ExamIcon, LightbulbIcon, Separator, StarShineIcon } from "@mdm/ui"
import Link from "next/link"

export default function StandsPage() {

  return (
    <DivCircuitBg classNameBgImage="opacity-50 -z-[8]">
      <div className="flex flex-col items-center w-full lg:w-3/4 px-5 lg:px-0 space-y-14 mb-20">
        {/* TITLE */}
        <div className="space-y-4">
          <h1 className="text-center text-4xl font-bold drop-shadow-sm">
            <span className='font-literata text-[#F25C54]'>
              Stands
            </span>
          </h1>

          <div
            className="text-xl text-center"
          >
            À travers des stands interactifs et éducatifs, venez plonger dans le monde fascinant des mathématiques,<br/>
            ou même partager votre passion en animant un stand.
          </div>
        </div>

        {/* VISITORS SECTION */}
        <div className="text-left">
          <h2 className="text-3xl font-bold font-literata">Pour le public</h2>
          <Separator className="my-4 bg-[#F25C54]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="w-full space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
              <div className="flex justify-center">
                <div className="w-fit p-[10px] bg-[#F25C54] rounded-full">
                  <StarShineIcon className="h-8 w-8"/>
                </div>
              </div>

              <h1 className='text-center font-bold font-literata text-2xl'>Découvrez des concepts fascinants</h1>
              <p className="text-center text-xl">Chaque stand aborde un thème mathématique unique.</p>
            </div>

            <div className="w-full space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
              <div className="flex justify-center">
                <div className="w-fit p-[10px] bg-[#F25C54] rounded-full">
                  <BoardGamesIcon className="h-8 w-8"/>
                </div>
              </div>

              <h1 className='text-center font-bold font-literata text-2xl'>Participez activement</h1>
              <p className="text-center text-xl">Engagez-vous dans des activités pratiques, des démonstrations en direct ou des jeux stimulants proposés par les animateurs.</p>
            </div>

            <div className="w-full space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
              <div className="flex justify-center">
                <div className="w-fit p-[10px] bg-[#F25C54] rounded-full">
                  <LightbulbIcon className="h-8 w-8"/>
                </div>
              </div>

              <h1 className='text-center font-bold font-literata text-2xl'>Explorez les applications des maths</h1>
              <p className="text-center text-xl">De l&apos;intelligence artificielle aux solutions pour le développement du Maroc.</p>
            </div>

            <div className="w-full space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
              <div className="flex justify-center">
                <div className="w-fit p-[10px] bg-[#F25C54] rounded-full">
                  <AwardIcon className="h-8 w-8"/>
                </div>
              </div>

              <h1 className='text-center font-bold font-literata text-2xl'>Votez pour votre stand préféré</h1>
              <p className="text-center text-xl">Prenez part à l&apos;évaluation en désignant le stand qui vous aura le plus impressionné</p>
            </div>
          </div>
        </div>

        {/* ANIMATORS SECTION */}
        <div className="text-left w-full">
          <h2 className="text-3xl font-bold font-literata">Pour les animateurs</h2>
          <Separator className="my-4 bg-[#F25C54]" />

          <div>
            Si vous êtes:
            <ol className="list-decimal ml-6">
              <li className="marker:text-[#F25C54] marker:text-2xl">Étudiant universitaire</li>
              <li className="marker:text-[#F25C54] marker:text-2xl">Membres d&apos;un club ou d&apos;une association, représentants d&apos;une entreprise ou simplement un groupe d&apos;amis passionné par les mathématiques</li>
              <li className="marker:text-[#F25C54] marker:text-2xl">Vous souhaitez partager vos idées innovantes et vulgariser des concepts mathématiques auprès d&apos;un public diversifié</li>
            </ol>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold font-literata text-center mt-8 text-gray-800">
              MDM vous offre une opportunité exceptionnelle pour animer votre propre stand mathématique
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 -my-4 text-lg">
          <div className="text-center space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <h2 className="text-2xl font-bold font-literata text-[#F25C54]">Rendez-le immersif et interactif</h2>
            <p>Utilisez des démonstrations en direct, des expériences ou des jeux pour expliquer un concept mathématique de manière captivante</p>
          </div>

          <div className="text-center space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <h2 className="text-2xl font-bold font-literata text-[#F25C54]">Inspirez-vous des applications réelles</h2>
            <p>Reliez votre présentation à des exemples concrets ou des problématiques liées au développement du Maroc, comme l&apos;optimisation des ressources, la gestion des données ou les modèles de prévision économique.</p>
          </div>

          <div className="text-center space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <h2 className="text-2xl font-bold font-literata text-[#F25C54]">Mettez en scène vos explications</h2>
            <p>Servez-vous d&apos;éléments visuels (maquettes, affiches, écrans interactifs).</p>
          </div>

          <div className="text-center space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <h2 className="text-2xl font-bold font-literata text-[#F25C54]">Le vote du public présent</h2>
            <p>
              Chaque participant pourra voter pour le stand qui l&apos;a le plus marqué.<br/>
              Un <span className="font-bold">prix sera décerné au meilleur stand</span>
            </p>
          </div>
        </div>

        <div
          className="flex flex-col w-full md:flex-row md:justify-between md:space-x-8 text-base"
        >
          <div className="w-full space-y-4 p-4">
            <h1 className='font-bold font-literata text-3xl'>Prix du meilleur Stand 🏆</h1>

            <p>
              Tous les stands animés participeront automatiquement à la compétition{" "}
              <span className="font-semibold">Meilleur Stand</span>.
            </p>

            <p>
              À l&apos;issue de l&apos;événement, le stand ayant le plus séduit le public sera élu{" "}
              <span className="font-semibold">Meilleur Stand</span> et se verra décerner le
              prix correspondant.
            </p>
          </div>

          <div className="w-full space-y-4 p-4">
            <h1 className='font-bold font-literata text-3xl'>Bien préparer votre candidature</h1>
            
            <p>Pour déposer votre candidature, il va falloir préparer un <span className="font-semibold">abstract</span> décrivant les sujets que vous souhaitez aborder sur votre stand ainsi que la manière dont vous comptez l'animer.</p>

            <p>Afin de vous accompagner dans cette démarche, vous trouverez ci-dessous un <span className="font-semibold">exemple d&apos;abstract</span> ainsi qu'un lien vers un <span className="font-semibold">générateur d&apos;abstract</span>:</p>

            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <Link href='https://drive.google.com/file/d/1cQSE4k_aGe3yHqJiineQ1rWwe61uXDYu/view?usp=sharing' target="_blank">
                <div 
                  className="h-[8rem] w-[9rem] bg-white border-b-4 border-b-red-500 border-2 shadow-md flex justify-center items-center rounded-md hover:cursor-pointer"
                > 
                  <div className="flex flex-col items-center text-center">
                    <span className="font-bold">Exemple d&apos;abstract</span>
                    <ExamIcon className="h-[4rem]"/>
                  </div>
                </div>
              </Link>

              <Link href='https://genpdflatexcandidature.streamlit.app/' target="_blank">
                <div 
                  className="h-[8rem] w-[9rem] bg-white border-b-4 border-b-red-500 border-2 shadow-md flex justify-center items-center rounded-md hover:cursor-pointer"
                > 
                  <div className="flex flex-col items-center text-center">
                    <span className="font-bold">Générateur d&apos;abstract</span>
                    <ExamIcon className="h-[4rem]"/>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <CtaSection />
      </div>
    </DivCircuitBg>
  )
}