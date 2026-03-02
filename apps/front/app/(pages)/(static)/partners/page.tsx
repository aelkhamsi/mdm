import DivCircuitBg from "@/app/components/div-circuit-bg"
import PartnerCard from "./partner-card"

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
      <div className="w-full max-w-sm md:max-w-7xl px-5 xl:px-0 mt-10 mb-20">
        <div className="space-y-6">
          <div>
            {/* ORGANISATEUR */}
            <div>
              <h1 
                className="animate-fade-up opacity-0 text-center text-3xl font-bold drop-shadow-sm"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <span className='font-literata leading-[1.3] bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text'>Organisateur·rices</span>
              </h1>

              <div
                className="flex justify-around flex-wrap gap-6 p-8 rounded-lg animate-fade-up opacity-0"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <PartnerCard
                  key={organizers[0].key}
                  imageSrc={organizers[0].imageHref}
                  imageHeight={organizers[0].imageHeight}
                >
                  <div className="text-sm space-y-2">
                    <div><span className='mb-8 bg-gradient-to-br from-sky-500 to-[#272162] text-transparent bg-clip-text font-semibold'>Math&Maroc</span> est une association à but non lucratif créée en 2016 par de jeunes Marocain·nes souhaitant redonner à la collectivité.</div>
                    <div><span className="font-bold">Notre mission</span> est de promouvoir les mathématiques et les sciences au Maroc, et ainsi guider les jeunes vers l&apos;excellence.</div>
                    <div><span className='mb-8 bg-gradient-to-br from-sky-500 to-[#272162] text-transparent bg-clip-text font-semibold'>Math&Maroc</span> organise <span className="font-bold">MDM</span> depuis sa première édition en avril 2024.</div>
                  </div>
                </PartnerCard>
              </div>
            </div>
          </div>

          <div className="flex justify-around flex-wrap">
            {/* PARTENAIRE OFFICIEL */}
            <div>
              <h1 
                className="animate-fade-up opacity-0 text-center text-3xl font-bold drop-shadow-sm"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <span className='font-literata leading-[1.3] bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text'>Partenaire Officiel</span>
              </h1>

              <div 
                className="flex justify-around flex-wrap gap-6 p-8 rounded-lg animate-fade-up opacity-0"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <PartnerCard
                  key={partners[0].key}
                  imageSrc={partners[0].imageHref}
                  imageHeight={partners[0].imageHeight}
                >
                  <div className="text-sm space-y-2">
                    <div><span className='mb-8 bg-gradient-to-br from-stone-500 to-[#FC5C00] text-transparent bg-clip-text font-semibold'>Adria Business and Technology</span> est un expert dans l&apos;édition et l&apos;intégration des logiciels destinés aux institutions financières.</div>
                    <div>Il s&apos;agit du <span className="font-semibold">partenaire officiel</span> de <span className='mb-8 bg-gradient-to-br from-sky-500 to-[#272162] text-transparent bg-clip-text font-semibold'>Math&Maroc</span>, qui a permis à la majorité de nos événements de voir le jour.</div>
                  </div>
                </PartnerCard>
              </div>
            </div>

            {/* En partenariat avec */}
            <div>
              <h1 
                className="animate-fade-up opacity-0 text-center text-3xl font-bold drop-shadow-sm"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <span className='font-literata leading-[1.3] bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text'>En partenariat avec</span>
              </h1>

              <div
                className="flex justify-around flex-wrap gap-6 p-8 rounded-lg animate-fade-up opacity-0"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <PartnerCard
                  key={hosts[0].key}
                  imageSrc={hosts[0].imageHref}
                  imageHeight={hosts[0].imageHeight}
                >
                  <div className="text-sm">
                    <div>L&apos;<span className='mb-8 bg-gradient-to-br from-[#005598] to-sky-600 text-transparent bg-clip-text font-semibold'>UEMF</span> est une institution d&apos;enseignement supérieur qui favorise l&apos;échange et la coopération internationale dans l&apos;espace <span className="font-bold">Europe-Méditerranée-Afrique</span>, réunissant plus de <span className="font-bold">32 nationalités</span>.</div>
                    <div>Elle se distingue par son engagement envers l&apos;excellence académique et sa quête d&apos;innovation en recherche de pointe.</div>
                  </div>
                </PartnerCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DivCircuitBg>
  )
}