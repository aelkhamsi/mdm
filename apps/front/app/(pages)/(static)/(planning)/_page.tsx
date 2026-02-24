import DivCircuitBg from "@/app/components/div-circuit-bg"

export default function ConferencesPage() {

  return (
    <DivCircuitBg classNameBgImage="opacity-50 -z-[8]">
      <div className="w-full flex flex-col items-center max-w-sm md:max-w-screen-xl xl:px-5 xl:px-0 space-y-6 mb-20">
        <h1 className="text-center text-4xl font-bold drop-shadow-sm">
          <span className='bg-gradient-to-br from-sky-600 to-[#1C55FF] inline-block text-transparent bg-clip-text'>Planning</span>
        </h1>

        <img
          src='/planning.jpeg'
          alt='planning'
          style={{height: 'auto', width: '100%'}}
        /> 
      </div>
    </DivCircuitBg>
  )
}