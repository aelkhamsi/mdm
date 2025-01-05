import { Instagram, Scroll, MessageCircleIcon } from 'lucide-react'
import React from 'react'
import DivCircuitBg from '../div-circuit-bg'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <DivCircuitBg className='bg-gradient-to-b from-transparent via-transparent to-[#edf7ff]'>
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center max-w-xl space-y-10">
        <a
          href="https://www.instagram.com/mathmaroc/"
          target="_blank"
          rel="noreferrer"
          className="animate-fade-up opacity-0 mb-5 flex max-w-fit  items-center justify-center space-x-2 overflow-hidden rounded-full bg-red-100 px-7 py-2 transition-colors hover:bg-red-200"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Instagram className="h-5 w-5 text-[#e1306c]" />
          <p className="text-sm font-semibold text-[#e1306c]">
            Introducing Math&Maroc
          </p>
        </a>

        <div className='space-y-2'>
          <h1
            className="animate-fade-up opacity-0 text-center text-[#131316] font-display text-4xl font-bold tracking-[0.04em] [text-wrap:balance] md:text-5xl md:leading-[3rem]"
            style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
          >
            Moroccan Day of Mathematics
          </h1>

          <p
            className="animate-fade-up opacity-0 text-center text-gray-500 [text-wrap:balance] md:text-sm"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            Exploring the Rich Heritage, Modern Innovations, and Future Potential of Mathematics in Morocco.
          </p>
        </div>

        <div
          className="mx-auto flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
        >
          <Link
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-xs text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="/application"
          >
            <Scroll className='h-4 w-4'/>
            <p>
              <span className="hidden sm:inline-block"></span> Participer
            </p>
          </Link>

          <Link
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-xs text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="/faq"
          >
            <MessageCircleIcon className='h-4 w-4'/>
            <p>
              <span className="hidden sm:inline-block"></span> FAQ
            </p>
          </Link>
        </div>

        <div
          className="flex animate-fade-up opacity-0 items-center justify-around w-full"
          style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
        >
          <div className='flex items-center space-x-4'>
            <p className='text-xs text-gray-500'>
              Organized by
            </p>

            <div className="flex space-x-4 items-center">
              <Link className="h-7 flex items-center" href="/sponsors">
                <Image
                  src="/mm.png"
                  alt="Math&Maroc Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-auto filter grayscale brightness-100 contrast-125 hover:grayscale-0 hover:brightness-100 hover:contrast-100"
                />
              </Link>
            </div>
          </div>
          
          <div className="flex space-x-4 items-center">
            <p className='text-xs text-gray-500'>
              Trusted by
            </p>
            
            <div className="flex space-x-4 items-center">
              <Link className="h-7 flex items-center" href="/sponsors">
                <Image
                  src="/adria.png"
                  alt="Adria Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-auto filter grayscale brightness-50 contrast-125 hover:grayscale-0 hover:brightness-100 hover:contrast-100"
                />
              </Link>
              <Link className="h-7 flex items-center" href="/sponsors">
                <Image
                  src="/evalmee.png"
                  alt="Evalmee Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-auto filter grayscale brightness-75 contrast-125 hover:grayscale-0 hover:brightness-100 hover:contrast-100"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DivCircuitBg>
  )
}

export default HeroSection
