
"use client"

import { Separator } from "@mdm/ui"
import { formatDate } from "@mdm/utils";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@mdm/ui";
import { Badge } from "@mdm/ui";
import { Button } from "@mdm/ui";
import { useRouter } from "next/navigation";
import { useAtomValue } from "jotai";
import { userAtom } from "@/app/store/userAtom";
import { ProfileSkeleton } from "@mdm/ui";
import { groupApplicationWording } from "./groupApplicationWording";

const getBadgeClassname = (status: string) => {
  switch(status) {
    case 'DRAFT':
      return 'bg-gray-300 text-black';
    case 'PENDING':
      return 'bg-[#FFE380] text-black';
    case 'NOTIFIED':
      return 'bg-[#79E2F2] text-black';
    case 'UPDATED':
      return 'bg-[#B3D4FF] text-black';
    case 'VALIDATED':
      return 'bg-[#79F2C0] text-black';
    case 'ACCEPTED':
      return 'bg-[#006644] text-white';
    case 'REJECTED':
      return 'bg-[#BF2600] text-white';
    case 'WAITLIST':
      return 'bg-[#403294] text-white';
  }
}

const groupApplicationCardContent = (groupApplication: any) => {
  if (!groupApplication) return ''

  return (
    <>
      <div className="text-sm"><span className="font-bold">Date de soumission</span>: {formatDate(groupApplication?.createdAt)}</div>
      <div className="text-sm"><span className="font-bold">Date de sauvegarde</span>: {formatDate(groupApplication?.updatedAt)}</div>
      <div className="text-sm"><span className="font-bold">Status</span>: <Badge className={`px-4 ${getBadgeClassname(groupApplication?.status?.status)}`}>{groupApplication?.status}</Badge></div>
    </>
  )
}

export default function GroupApplicationPage() {
  const user = useAtomValue(userAtom)
  const [content, setContent] = useState<any>(undefined);
  const router = useRouter();
  
  useEffect(() => {
    const application = user?.groupApplication;
    const applicationStatus = application?.status;
    const wording = groupApplicationWording[applicationStatus] ?? groupApplicationWording['EMPTY']

    setContent(wording)
  }, [user])

  const applicationCard = (
    <Card>
      <CardHeader>
        <CardTitle> {content?.title} </CardTitle>
        <CardDescription> {content?.subtitle} </CardDescription>
      </CardHeader>

      <CardContent>
        {groupApplicationCardContent(user?.groupApplication)}
      </CardContent>

      {content?.showCtaButton &&
        <CardFooter>
          <Button
            onClick={() => router.push('/group-application')}
          >
            {content?.ctaLabel}
          </Button>
        </CardFooter> 
      }
    </Card>
  )

  return (
    <div className="space-y-6">
      <div>
        <div className="text-lg font-medium">Candidature de groupe</div>
        <p className="text-sm text-muted-foreground"> C&apos;est ici que vous trouverez le statut de votre candidature de groupe.</p>
      </div>

      <Separator />

      {!user
        ? <ProfileSkeleton />
        : applicationCard
      }
    </div>
  )
}
