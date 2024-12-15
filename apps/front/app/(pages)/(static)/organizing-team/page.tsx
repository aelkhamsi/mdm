import { Linkedin } from '@mdm/ui';
import {
  organizingCommittee,
  staff,
  webDevelopment,
  brandDesign,
} from './data';
import Link from 'next/link';
import { shuffle } from '@mdm/utils';
import { Brush } from '@mdm/ui';

const Card = ({
  key,
  name,
  imageSrc,
  linkedinSrc,
  portfolioSrc,
}:{
  key: string,
  name: string,
  imageSrc: string,
  linkedinSrc?: string,
  portfolioSrc?: string,
}) => {
  return (
    <div 
      className="max-w-[10rem] bg-white border-b-4 border-red-500 flex flex-col justify-center items-center space-y-4 rounded-md py-2"
      key={key}
    > 
      <div className="h-fit">
        <img
          src={imageSrc}
          style={{height: '150px', width: 'auto'}}
        />
      </div>

      <div className='font-semibold flex space-x-2 bg-gradient-to-br from-black to-stone-600 inline-block text-transparent bg-clip-text'>
        <div className='text-xs text-center'>{name}</div>
        {linkedinSrc && <div><Link href={linkedinSrc} target='_blank' className='shadow-md'><Linkedin className="h-5 w-5 text-[#f04b5b]" /></Link></div>}
        {portfolioSrc && <div><Link href={portfolioSrc} target='_blank' className='shadow-md'><Brush className="h-6 w-6 text-[#f04b5b]" /></Link></div>}
      </div>
    </div>
  )
}

export default function OrganizingTeamPage() {
  const shuffledOrganizingCommitte = shuffle(organizingCommittee)

  return (
    <div className="w-full max-w-sm md:max-w-screen-lg px-5 xl:px-0 mt-10">
      <div className="space-y-6">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-4xl md:leading-[4rem]"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <span className='mb-8 bg-gradient-to-br from-sky-500 to-[#272162] inline-block text-transparent bg-clip-text'>Organizing Team</span>
        </h1>

        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-3xl md:leading-[4rem]"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <span className='bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text'>Math&Maroc</span> <span className='font-extralight'>{" | "}</span>
          <span className='bg-gradient-to-br from-black to-stone-500 inline-block text-transparent bg-clip-text'>Organizing Committee</span>
        </h1>

        <div 
          className="flex justify-around flex-wrap gap-6 shadow-md p-8 rounded-lg animate-fade-up opacity-0 md:gap-x-12"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          {shuffledOrganizingCommitte.map(person =>
            <Card
              key={person.name.toLowerCase().replace(' ', '_')}
              name={person.name}
              imageSrc={person.imageSrc} 
              linkedinSrc={person.linkedinSrc}
            />
          )}
        </div>

        <div className='flex flex-col justify-around space-y-6 flex-wrap gap-y-6 md:flex-row md:space-y-0'>
          <div className='w-full md:w-1/2 space-y-4'>
            <h1
              className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-3xl md:leading-[4rem]"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              <span className='bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text'>Math&Maroc</span> <span className='font-extralight'>{" | "}</span>
              <span className='bg-gradient-to-br from-black to-stone-500 inline-block text-transparent bg-clip-text'>Staff</span>
            </h1>
            
            <div 
              className="flex justify-around flex-wrap gap-6 shadow-md p-8 rounded-lg animate-fade-up opacity-0 mr-6"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              {staff.map(person =>
                <Card
                  key={person.name.toLowerCase().replace(' ', '_')}
                  name={person.name}
                  imageSrc={person.imageSrc} 
                  linkedinSrc={person.linkedinSrc}
                />
              )}
            </div>
          </div>

          <div className='w-full md:w-1/2 space-y-4'>
            <h1
              className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-3xl md:leading-[4rem]"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              <span className='bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text'>Math&Maroc</span> <span className='font-extralight'>{" | "}</span>
              <span className='bg-gradient-to-br from-black to-stone-500 inline-block text-transparent bg-clip-text'>Website Development</span>
            </h1>

            <div 
              className="flex justify-around flex-wrap gap-6 shadow-md  p-8 rounded-lg animate-fade-up opacity-0 ml-6"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              {webDevelopment.map(person =>
                <Card
                  key={person.name.toLowerCase().replace(' ', '_')}
                  name={person.name}
                  imageSrc={person.imageSrc} 
                  linkedinSrc={person.linkedinSrc}
                />
              )}
              
            </div>
          </div>

          <div className='w-full md:w-1/2 space-y-4'>
            <h1
              className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-3xl md:leading-[4rem]"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              <span className='bg-gradient-to-br from-sky-800 to-[#272162] inline-block text-transparent bg-clip-text'>Math&Maroc</span> <span className='font-extralight'>{" | "}</span>
              <span className='bg-gradient-to-br from-black to-stone-500 inline-block text-transparent bg-clip-text'>Branding & Design</span> 
            </h1>

            <div 
              className="flex justify-around flex-wrap gap-6 shadow-md p-8 rounded-lg animate-fade-up opacity-0 mx-6"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              {brandDesign.map(person =>
                <Card
                  key={person.name.toLowerCase().replace(' ', '_')}
                  name={person.name}
                  imageSrc={person.imageSrc} 
                  linkedinSrc={person.linkedinSrc}
                  portfolioSrc={person.portfolioSrc}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}