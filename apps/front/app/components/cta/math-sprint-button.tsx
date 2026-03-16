import Link from 'next/link';
import { Scroll } from 'lucide-react';


const MathSprintButton = () => {
  return (
    <Link
      className="flex max-w-fit items-center justify-center h-11 text-lg space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-md transition-colors hover:border-gray-800"
      href="https://drive.google.com/file/d/1C-Pk9S3px2kvO9XFkoOKnlWvh7Rl8RNv/view?usp=sharing"
      target='_blank'
    >
      <Scroll className='h-5 w-5'/>
      <span>Devoir MathSprint</span>
    </Link>
  )
}

export default MathSprintButton
