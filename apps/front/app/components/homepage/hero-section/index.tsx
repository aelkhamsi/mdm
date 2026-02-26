import CtaButton from '../../cta/cta-button'
import FaqButton from '../../cta/faq-button'
import RegulationButton from '../../cta/regulation-button'
import DeadlineButton from '../../cta/deadline-button'
import CenterContainer from '../../center-container'
import HeroSectionPartners from './hero-section-partners'
import HeroSectionTitle from './hero-section-title'
import HeroSectionLogo from './hero-section-logo'

const HeroSection = () => {
  const backgroundColorClassname = "bg-[#111111]"

  return (
    <CenterContainer className={`pt-28 pb-10 z-0 space-y-10 ${backgroundColorClassname}`}>
      
      <div className='flex flex-col items-center'>
        <HeroSectionLogo />

        <div className='flex flex-col gap-y-16'>
          <HeroSectionTitle />

          <div
            className="mx-auto flex flex-wrap gap-y-4 animate-fade-up items-center justify-center space-x-5 opacity-0"
            style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
          >
            <CtaButton />
            <DeadlineButton />
            <RegulationButton />
            <FaqButton />
          </div>

          <HeroSectionPartners />
        </div>
      </div>
      
    </CenterContainer>
  )
}

export default HeroSection
