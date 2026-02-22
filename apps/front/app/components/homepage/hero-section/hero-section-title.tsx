
const HeroSectionTitle = () => {
  const textColor = '#F9F6EE'

  return (
    <div className='space-y-2'>
      <h1
        className="animate-fade-up opacity-0 text-center font-display text-4xl font-bold tracking-[0.05em] text-wrap:balance md:text-5xl md:leading-[3rem]"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <span className={`bg-gradient-to-br from-[#F9F6EE] via-[#F9F6EE] to-[#CBFF8C]/[0.5] inline-block text-transparent bg-clip-text`}>
          Une journée pour explorer, comprendre et s&apos;inspirer
        </span>
      </h1>
    </div>
  )
}

export default HeroSectionTitle
