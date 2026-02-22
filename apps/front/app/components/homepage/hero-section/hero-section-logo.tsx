import Image from "next/image"

const HeroSectionLogo = () => {
  return (
    <div 
      className="animate-fade-up opacity-0 z-10 p-4 md:p-0"
      style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
    >
      <Image
        src="/images/logos/primary_logo.svg"
        alt="MDM logo"
        width='600'
        height='200'
      />
    </div>
  )
}

export default HeroSectionLogo
