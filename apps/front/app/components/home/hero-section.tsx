import { Github, Instagram } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center py-16 bg-gradient-to-b from-transparent via-transparent to-[#edf7ff]'>

      {/* Background Image */}
      <div className='absolute inset-0 z-[-8] overflow-hidden'>
        <div className='absolute top-6 right-1/2 aspect-[969/887] w-[969px]'>
          <picture>
            <img className='absolute inset-0 h-full w-full' src="https://clerk.com/_next/static/media/circuit-lines@2xr.0351fb9a.png" />
          </picture>
          <picture>
            <img className='absolute inset-0 h-full w-full' src="https://clerk.com/_next/static/media/circuit-components@2xl.288e1b6c.webp" />
          </picture>
        </div>
        
        <div className='absolute top-6 right-1/2 origin-right -scale-x-100 aspect-[969/887] w-[969px]'>
          <picture>
            <img className='absolute inset-0 h-full w-full' src="https://clerk.com/_next/static/media/circuit-lines@2xr.0351fb9a.png" />
          </picture>
          <picture>
            <img className='absolute inset-0 h-full w-full' src="https://clerk.com/_next/static/media/circuit-components@2xl.288e1b6c.webp" />
          </picture>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full max-w-xl">
        <a
          href="https://www.instagram.com/mathmaroc/"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-red-100 px-7 py-2 transition-colors hover:bg-red-200"
        >
          <Instagram className="h-5 w-5 text-[#e1306c]" />
          <p className="text-sm font-semibold text-[#e1306c]">
            Introducing Math&Maroc
          </p>
        </a>
        <h1
          className="animate-fade-up text-center text-[#131316] font-display text-4xl font-bold tracking-[0.04em] [text-wrap:balance] md:text-6xl md:leading-[4rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Moroccan Day of Mathematics
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-base"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Exploring the Rich Heritage, Modern Innovations, and Future Potential of Mathematics in Morocco.
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/steven-tey/precedent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block"></span> GitHub{" "}
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
