"use client"

import { useState } from 'react';
import { LoadingDots } from '@mdm/ui';
import Link from 'next/link';
import { SheetIcon } from 'lucide-react';


const PlanningButton = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Link
      className="flex max-w-fit items-center justify-center h-11 space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-md transition-colors hover:border-gray-800"
      href="/planning"
      onClick={() => setIsLoading(true)}
    >
      <SheetIcon className='h-5 w-5'/>
      {!isLoading
        ? <span>Planning</span>
        : <LoadingDots color="#808080" />
      }
    </Link>
  )
}

export default PlanningButton
