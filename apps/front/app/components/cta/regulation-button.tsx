import Link from 'next/link';
import { Scroll } from 'lucide-react';


const RegulationButton = () => {
  return (
    <Link
      className="flex max-w-fit items-center justify-center h-11 text-lg space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-md transition-colors hover:border-gray-800"
      href="https://drive.google.com/file/d/1pDlpsReVpca6-yFJXt849QQeEhsr7Jon/view?usp=sharing"
      target='_blank'
    >
      <Scroll className='h-5 w-5'/>
      <span>Réglement</span>
    </Link>
  )
}

export default RegulationButton
