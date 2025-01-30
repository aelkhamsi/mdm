import DivCircuitBg from "@/app/components/div-circuit-bg"

const organizers = [
  {
    key: 'math-and-maroc',
    label: 'Math&Maroc',
    imageHref: '/mm.png',
    imageHeight: '60px',
  },
]

const partners = [
  {
    key: 'adria',
    label: 'Adria ',
    imageHref: '/adria_official_partner.png',
    imageHeight: '90px',
  }
]

const hosts = [
  {
    key: 'uemf',
    label: 'UEMF',
    imageHref: '/uemf_logo.png',
    imageHeight: '100px',
  }
]

export default function PartnersPage() {
  return (
    <DivCircuitBg classNameBgImage="opacity-50">
      <div className="w-full max-w-sm md:max-w-7xl px-5 xl:px-0 mt-10">
        <div className="space-y-6">
          <div className="flex justify-around flex-wrap">
            {/* ORGANISATEUR */}
            <div>
              <h1 
                className="animate-fade-up opacity-0 text-center text-3xl font-bold drop-shadow-sm"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <span className='bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text'>Organisateur</span>
              </h1>

              <div
                className="flex justify-around flex-wrap gap-6 p-8 rounded-lg animate-fade-up opacity-0"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <div
                  className="w-[16rem] md:h-[16rem] md:w-[34rem] bg-white shadow-lg border-b-4 border-red-500 md:flex justify-center items-center rounded-md"
                  key={organizers[0].key}
                > 
                  <div className="h-[8rem] w-[16rem] md:h-fit md:w-[18rem] flex justify-center items-center">
                    <img
                      src={organizers[0].imageHref}
                      style={{height: organizers[0].imageHeight, width: 'auto'}}
                    />
                  </div>

                  <div className="h-fit w-[16rem] p-4 md:w-[24rem] flex flex-col space-y-2 text-sm">
                    <div><span className='mb-8 bg-gradient-to-br from-sky-500 to-[#272162] text-transparent bg-clip-text font-semibold'>Math&Maroc</span> est une association à but non lucratif créée en 2016 par de jeunes Marocains souhaitant redonner à la collectivité.</div>
                    <div><span className="font-bold">Notre mission</span> est de promouvoir les mathématiques et les sciences au Maroc, et ainsi guider les jeunes vers l&apos;excellence.</div>
                    <div><span className='mb-8 bg-gradient-to-br from-sky-500 to-[#272162] text-transparent bg-clip-text font-semibold'>Math&Maroc</span> organise <span className="font-bold">MDM</span> depuis sa première édition en avril 2024.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* PARTENAIRE OFFICIEL */}
            <div>
              <h1 
                className="animate-fade-up opacity-0 text-center text-3xl font-bold drop-shadow-sm"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <span className='bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text'>Partenaire Officiel</span>
              </h1>

              <div 
                className="flex justify-around flex-wrap gap-6 p-8 rounded-lg animate-fade-up opacity-0"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <div 
                  className="w-[16rem] md:h-[16rem] md:w-[34rem] bg-white shadow-lg border-b-4 border-red-500 md:flex justify-center items-center rounded-md"
                  key={partners[0].key}
                >
                  <div className="h-[8rem] w-[16rem] md:h-fit md:w-[18rem] flex justify-center items-center">
                    <img
                      src={partners[0].imageHref}
                      style={{height: partners[0].imageHeight, width: 'auto'}}
                    />
                  </div>

                  <div className="h-fit w-[16rem] p-4 md:w-[20rem] flex flex-col space-y-2 text-sm">
                    <div><span className='mb-8 bg-gradient-to-br from-stone-500 to-[#FC5C00] text-transparent bg-clip-text font-semibold'>Adria Business and Technology</span> est un expert dans l&apos;édition et l&apos;intégration des logiciels destinés aux institutions financières.</div>
                    <div>Il s&apos;agit du <span className="font-semibold">partenaire officiel</span> de <span className='mb-8 bg-gradient-to-br from-sky-500 to-[#272162] text-transparent bg-clip-text font-semibold'>Math&Maroc</span>, qui a permis à la majorité de nos événements de voir le jour.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
          {/* HÔTE */}
          <div>
            <h1 
              className="animate-fade-up opacity-0 text-center text-3xl font-bold drop-shadow-sm"
              style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
            >
              <span className='bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text'>Hôte</span>
            </h1>

            <div
              className="flex justify-around flex-wrap gap-6 p-8 rounded-lg animate-fade-up opacity-0"
              style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
            >
              <div
                className="w-[16rem] md:h-[16rem] md:w-[34rem] bg-white shadow-lg border-b-4 border-red-500 md:flex justify-center items-center rounded-md"
                key={hosts[0].key}
              > 
                <div className="h-[8rem] w-[16rem] md:h-fit md:w-[18rem] flex justify-center items-center">
                  <img
                    src={hosts[0].imageHref}
                    style={{height: hosts[0].imageHeight, width: 'auto'}}
                  />
                </div>

                <div className="h-fit w-[16rem] p-4 md:w-[24rem] flex flex-col space-y-2 text-sm">
                  <div>L&apos;<span className='mb-8 bg-gradient-to-br from-[#005598] to-sky-600 text-transparent bg-clip-text font-semibold'>UEMF</span> est une institution d&apos;enseignement supérieur qui favorise l&apos;échange et la coopération internationale dans l&apos;espace <span className="font-bold">Europe-Méditerranée-Afrique</span>, réunissant plus de <span className="font-bold">32 nationalités</span>.</div>
                  <div>Elle se distingue par son engagement envers l&apos;excellence académique et sa quête d&apos;innovation en recherche de pointe.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DivCircuitBg>
  )
}