import DivCircuitBg from "@/app/components/div-circuit-bg"

export default function BestMathVideoPage() {

  return (
    <DivCircuitBg classNameBgImage="opacity-50">
      <div className="w-full max-w-sm md:max-w-screen-xl px-5 xl:px-0 space-y-6">
        <h1 className="text-center text-4xl font-bold drop-shadow-sm">
          <span className='bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text'>Best Mathematical Video</span>
        </h1>

        <div
          className="flex flex-col w-full md:flex-row md:justify-between md:space-x-8 text-base"
        >
          <div className="w-full space-y-4 p-4">
            <p className='font-bold text-xs text-cyan-600'>C'est quoi Math Sprint</p>
            <h1 className='font-bold text-3xl'>Une compétition pour les esprits mathématiques affûtés</h1>
            <p className="text-lg">Les mathématiques sont partout autour de nous, souvent cachées dans les subtilités de la vie quotidienne. Nous vous invitons donc à devenir notre guide à travers ce monde captivant!</p>
            <p className="text-lg">Pour ce faire, réalisez de manière individuelle une vidéo originale de 4 minutes maximum où vous expliquez un concept mathématique de votre choix. Choisissez un sujet qui vous fascine; une notion de géométrie, une formule algébrique,une démonstration créative. Soyez imaginatifs et rendez ce concept accessible pour le public. </p>
          </div>

          <div className="w-full flex flex-col justify-center space-y-4">
            <p className='font-bold text-xs text-cyan-600'>Le vainqueur de la dernière édition</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tsyDui1EdUU?si=Yqsf9vL2zRA6pCLS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>

        <div
          className="flex flex-col w-full md:flex-row md:justify-between md:space-x-8 text-base"
        >
          <div className="w-full space-y-4 p-4">
            <p className='font-bold text-xs text-cyan-600'>L&apos;évaluation</p>
            <h1 className='font-bold text-3xl'>Quels sont les critères d&apos;évaluation ?</h1>
            <p className="text-lg">
              <ul className="list-disc">
                <li>Exactitude du contenu mathématique</li>
                <li>Clarté et fluidité</li>
                <li>Présentation</li>
                <li>Créativité</li>
                <li>Engagement et interactivité</li>
                <li>Élimination directe suite à l’usage excessif d’AI.</li>
              </ul>
            </p>
          </div>

          <div className="w-full space-y-4 p-4">
            <p className='font-bold text-xs text-cyan-600'>La participation</p>
            <h1 className='font-bold text-3xl'>Comment Participer ?</h1>
            <p className="text-lg">
              <ul className="list-disc">
                <li>La participation à ce challenge est individuelle et unique</li>
                <li>Choisissez un sujet mathématique que vous trouvez intéressant</li>
                <li>Créez une vidéo d’une durée maximale de 4 minutes dans laquelle vous expliquez ce concept d’une manière engageante</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </DivCircuitBg>
  )
}