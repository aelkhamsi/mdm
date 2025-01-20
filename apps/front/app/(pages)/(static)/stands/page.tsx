import DivCircuitBg from "@/app/components/div-circuit-bg"
import TennisArcade from "@/app/components/tennis-arcade"

export default function StandPage() {

  return (
    <DivCircuitBg classNameBgImage="opacity-50 -z-[8]">
      <div className="w-full max-w-sm md:max-w-screen-lg px-5 xl:px-0 space-y-6">
        <h1 className="text-center text-4xl font-bold drop-shadow-sm">
          <span className='bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text'>Stand</span>
        </h1>
      </div>

      <div className="text-xl text-center text-gray-500 mt-[10rem]">
        We are working hard to give you more details soon!
      </div>

      <div className="mt-10">
        <TennisArcade />
      </div>
    </DivCircuitBg>
  )
}