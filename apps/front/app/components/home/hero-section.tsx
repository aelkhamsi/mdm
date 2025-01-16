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
        {/* <a
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
        </a> */}

        {/* Logo */}
        <div className="z-10 p-4 md:p-0">
          <Image
            src="/mdm_logo.svg"
            alt="M&M logo"
            width='400'
            height='200'
          />
        </div>

        <div className='space-y-2'>
          <h1
            className="animate-fade-up opacity-0 text-center font-display text-4xl font-bold tracking-[0.05em] text-wrap:balance md:text-5xl md:leading-[3rem]"
            style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
          >
            <span className='bg-gradient-to-br from-[#292660] to-stone-800 inline-block text-transparent bg-clip-text'>Le plus grand événement de mathématiques au Maroc</span>
          </h1>

          {/* <p
            className="animate-fade-up opacity-0 text-center text-gray-500 text-wrap:balance"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            Explorer le riche patrimoine, les innovations modernes et le potentiel futur des mathématiques au Maroc
          </p> */}
        </div>

        <div
          className="mx-auto flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
        >
          <Link
            href="/application"
          >
            <button className="relative inline-flex h-11 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full gap-x-2 cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1 text-black backdrop-blur-3xl">
                <Scroll className='h-5 w-5'/>
                Participer
              </span>
            </button>
          </Link>

          <Link
            className="flex max-w-fit items-center justify-center h-11 space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-md transition-colors hover:border-gray-800"
            href="/faq"
          >
            <MessageCircleIcon className='h-5 w-5'/>
            <p>
              <span className="hidden sm:inline-block"></span> FAQ
            </p>
          </Link>
        </div>

        <div
          className="flex flex-col space-y-4 md:flex-row md:space-y-0 animate-fade-up opacity-0 items-center justify-around w-full"
          style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
        >
          <div className='flex items-center space-x-4'>
            <p className='text-sm text-gray-500'>
              Organized by
            </p>

            <div className="flex space-x-4 items-center">
              <Link className="h-12 flex items-center" href="/partners">
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
            <p className='text-sm text-gray-500'>
              Trusted by
            </p>
            
            <div className="flex space-x-4 items-center">
              <Link className="h-14 flex items-center" href="/partners">
                <Image
                  src="/adria_official_partner.png"
                  alt="Adria Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-auto filter grayscale brightness-50 contrast-125 hover:grayscale-0 hover:brightness-100 hover:contrast-100"
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
