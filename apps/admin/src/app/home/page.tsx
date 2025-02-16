"use client"

import { HoverEffect } from "@/components/shared/card-hover-effect";
import Image from "next/image";

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

  return (
    <>
        <Image
          src="/mdm.png"
          alt="MDM logo"
          width='100'
          height='100'
        />

        <HoverEffect items={links} className="flex justify-center gap-x-4"/>
    </>
  )
}
