"use client"

import { useRef } from "react";

const HeroSectionLogo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div 
      className="relative animate-fade-up opacity-0 flex items-center z-10 p-4 md:p-0 h-[12rem] sm:h-[15rem] md:h-[18rem] xl:h-[22rem]"
      style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={() => {
          const video = videoRef.current;
          if (!video) return;
          video.currentTime = 0;

          setTimeout(() => {
            video.play();
          }, 7000);
        }}
        className="relative inset-0 h-full object-cover"
      >
        <source src="/videos/mdm_2.mp4" type="video/mp4" />
      </video>

      <img
        src="/images/logos/primary_logo_text.png"
        alt="MDM logo"
        className="relative h-1/2"
      />
    </div>
  )
}

export default HeroSectionLogo
