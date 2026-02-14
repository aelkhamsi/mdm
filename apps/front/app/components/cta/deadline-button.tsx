"use client"

import Link from 'next/link';
import { Timer } from 'lucide-react';

const DeadlineButton = () => {

  return (
    <Link
      className="flex max-w-fit items-center justify-center h-11 space-x-2 rounded-full border border-red-400 bg-white px-4 py-2 text-gray-700 shadow-md transition-colors hover:border-gray-800"
      href="#deadlines"
    >
      <Timer className='h-5 w-5'/>
      <span className="hidden sm:inline-block">Dates limites</span>
    </Link>
  )
}

export default DeadlineButton
