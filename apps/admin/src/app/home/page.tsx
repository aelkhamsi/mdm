"use client"

import { HoverEffect } from "@/components/shared/card-hover-effect";
import Image from "next/image";
import Stats from "./stats";
import { useRecoilValue } from "recoil";
import { applicationsState } from "@/store/applicationsState";
import { ActivityChoiceValues } from "./applications/components/application-activity-choices";

const links = [
  {
    title: "Applications",
    description:
      "Manage candidate applications",
    link: "/home/applications",
  },
  {
    title: "Users",
    description:
      "Manage user pofiles",
    link: "/home/users",
  },
];

export default function Home() {
  const applications = useRecoilValue(applicationsState);
  const mathSprintNumbers = applications?.filter((application: any) =>
    JSON.parse(application?.activityChoices).includes(ActivityChoiceValues.MATH_SPRINT)
  ).length
  const bestMathVideoNumbers = applications?.filter((application: any) =>
    JSON.parse(application?.activityChoices).includes(ActivityChoiceValues.BEST_MATH_VIDEO)
  ).length
  const standNumbers = applications?.filter((application: any) =>
    JSON.parse(application?.activityChoices).includes(ActivityChoiceValues.STAND)
  ).length
  const visitorNumbers = applications?.filter((application: any) =>
    JSON.parse(application?.activityChoices).includes(ActivityChoiceValues.VISITOR)
  ).length

  return (
    <>
      <Image
        src="/mdm.png"
        alt="MDM logo"
        width='100'
        height='100'
      />

      <HoverEffect items={links} className="flex justify-center gap-x-4"/>

      <div className="flex gap-x-4">
        <Stats title={'Math Sprint'} value={mathSprintNumbers} />
        <Stats title={'Best Math Video'} value={bestMathVideoNumbers} />
        <Stats title={'Stand'} value={standNumbers} />
        <Stats title={'Visitor'} value={visitorNumbers} />
      </div>
    </>
  )
}
