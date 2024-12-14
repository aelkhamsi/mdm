"use client"

import { useAtom } from "jotai";
import { ApplicationForm } from "./form/application-form";
import { userAtom } from "@/app/store/userAtom";
import { ProfileSkeleton } from "@mdm/ui"

export default function ApplicationPage() {
  const [user, _] = useAtom(userAtom)

  if (user) {
    return (
      <div className="z-10 w-full px-5 max-w-screen-xl xl:px-0">
        <div className="space-y-6 p-10 pb-16">
          <ApplicationForm user={user} />
        </div>
      </div>
    )
  } else { 
    return <ProfileSkeleton />
  }
}