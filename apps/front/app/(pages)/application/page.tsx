"use client"

import { useAtomValue } from "jotai";
import { ApplicationForm } from "./form/application-form";
import { userAtom } from "@/app/store/userAtom";
import { ProfileSkeleton } from "@mdm/ui"

export default function ApplicationPage() {
  const user = useAtomValue(userAtom)

  if (user) {
    return (
      <div className="z-10 w-full lg:w-3/4 px-5 lg:px-0">
        <ApplicationForm user={user} />
      </div>
    )
  } else { 
    return <ProfileSkeleton />
  }
}