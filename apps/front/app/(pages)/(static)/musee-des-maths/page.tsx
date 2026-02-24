import CtaSection from "@/app/components/cta/cta-section"
import DivCircuitBg from "@/app/components/div-circuit-bg"

export default function ConferencesPage() {

  return (
    <DivCircuitBg classNameBgImage="opacity-50 -z-[8]">
      <div className="w-full flex flex-col items-center max-w-sm md:max-w-screen-xl px-5 xl:px-0 space-y-20 mb-20">
        <h1 className="text-center text-4xl font-bold drop-shadow-sm">
          <span className='font-literata text-[#F25C54]'>Musée des maths</span>
        </h1>

        <div
          className="flex flex-col w-full md:w-3/4 md:flex-row md:justify-between md:space-x-8 text-base"
        >
          <div className="w-full space-y-4 p-4">
            <p className="text-lg">Plus de détails vont être communiqués dans les prochains jours</p>
          </div>
        </div>

        <CtaSection />
      </div>
    </DivCircuitBg>
  )
}