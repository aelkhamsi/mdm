"use client"

import { useAtomValue } from "jotai";
import { ApplicationForm } from "./form/application-form";
import { userAtom } from "@/app/store/userAtom";
import { ProfileSkeleton } from "@mdm/ui"
import { useRouter } from "next/navigation";

export default function ApplicationPage() {
  const router = useRouter();
  router.push("/profile/group-application");
  return null;
  // const user = useAtomValue(userAtom)

  // if (user) {
  //   return <ApplicationForm user={user} />
  // }
    
  // return <ProfileSkeleton />
}