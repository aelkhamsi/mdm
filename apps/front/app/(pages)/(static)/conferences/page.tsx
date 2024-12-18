import DivCircuitBg from "@/app/components/div-circuit-bg"

export default function ConferencesPage() {

  return (
    <DivCircuitBg classNameBgImage="opacity-50">
      <div className="w-full max-w-sm md:max-w-screen-lg px-5 xl:px-0 space-y-6">
        <h1 className="text-center text-3xl font-bold drop-shadow-sm">
          <span className='bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text'>Conférences</span>
        </h1>
      </div>
    </DivCircuitBg>
  )
}