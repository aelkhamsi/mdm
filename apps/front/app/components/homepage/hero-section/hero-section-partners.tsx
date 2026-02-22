import Image from 'next/image'
import Link from 'next/link'

const HeroSectionPartners = () => {
  return (
    <div
      className="flex flex-col items-center justify-around w-full space-y-4 md:flex-row md:space-y-0 animate-fade-up opacity-0"
      style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
    >
      <div className='flex items-center space-x-4'>
        <p className='text-sm text-gray-300'>
          Organized by
        </p>

        <Link className="h-10 flex items-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E5FF52]/[.15] via-transparent to-transparent" href="/partners">
          <Image
            src="/mm.png"
            alt="Math&Maroc Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-auto filter grayscale brightness-100 contrast-0 hover:grayscale-0 hover:brightness-100 hover:contrast-100"
          />
        </Link>
      </div>
        
      <div className="flex space-x-4 items-center">
        <p className='text-sm text-gray-300'>
          Trusted by
        </p>
        
        <Link className="h-12 flex items-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E5FF52]/[.15] via-transparent to-transparent" href="/partners">
          <Image
            src="/adria_official_partner.png"
            alt="Adria Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-auto filter grayscale brightness-100 contrast-0 hover:grayscale-0 hover:brightness-100 hover:contrast-100"
          />
        </Link>
      </div>
      
      <div className="flex space-x-4 items-center">
        <p className='text-sm text-gray-300'>
          Hosted by
        </p>

        <Link className="h-5 flex items-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E5FF52]/[.15] via-transparent to-transparent" href="/partners">
          <Image
            src="/uemf_logo_2.png"
            alt="UEMF Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-auto filter grayscale brightness-100 contrast-0 hover:grayscale-0 hover:brightness-100 hover:contrast-100"
          />
        </Link>
      </div>
    </div>
  )
}

export default HeroSectionPartners
