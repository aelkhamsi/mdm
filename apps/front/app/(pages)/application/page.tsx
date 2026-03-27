"use client"

import { useAtomValue } from "jotai";
// import { ApplicationForm } from "./form/application-form";
import { userAtom } from "@/app/store/userAtom";
// import { ProfileSkeleton } from "@mdm/ui"
import { useRouter } from "next/navigation";

export default function ApplicationPage() {
  // const user = useAtomValue(userAtom)
  const router = useRouter();
  router.push("/profile/application");
  return null;

  // if (user) {
  //   return <ApplicationForm user={user} />
  // }

  
  // return <ProfileSkeleton />
}