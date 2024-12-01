"use client"

import { useAuthGuard } from '@/app/hooks/use-auth-guard'
import React from 'react'

const ProfilePage = () => {
  useAuthGuard()

  return (
    <div>
      Profile page
    </div>
  )
}

export default ProfilePage
