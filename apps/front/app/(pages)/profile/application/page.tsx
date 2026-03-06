
"use client"

import { Input, Separator } from "@mdm/ui"
import { formatDate } from "@mdm/utils";
import { ChangeEvent, useEffect, useState } from "react";
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
import { useFileUpload } from "@/app/(pages)/application/hooks/use-file-upload";
import { getUploadFolderName } from "@/app/lib/utils";
import { putApplication } from "@/app/api/ApplicationApi";

const getBadgeClassname = (status: string) => {
  switch(status) {
    case 'DRAFT':
      return 'bg-gray-300 text-black';
    case 'COMPLETE':
      return 'bg-[#006644] text-white';
  }
}

export default function ApplicationPage() {
  const user = useAtomValue(userAtom)
  const [content, setContent] = useState<any>(undefined);
  const [mathSprintFile, setMathSprintFile] = useState<File | null>(null)
  const [mathSprintError, setMathSprintError] = useState<{message: string} | null>(null)
  const { uploadFiles } = useFileUpload()
  const router = useRouter();
  const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
  
  useEffect(() => {
    const application = user?.application;
    const applicationStatus = application?.status;

    if (!application) {
      setContent({
        title: "Vous n'avez pas soumis une candidature",
        subtitle: "On attend votre candidature avec impatience!",
        ctaLabel: "Créer votre candidature",
      })
    } else if (applicationStatus === 'DRAFT') {
      setContent({
        title: "Vous avez sauvegardé un brouillon de candidature. Elle n'est pas encore soumise.",
        subtitle: "Complétez votre candidature avant la deadline pour qu'elle soit prise en compte.",
        ctaLabel: "Continuer votre candidature",
      })
    } else {
      setContent({
        title: "Vous avez déjà soumis une candidature",
        subtitle: "Vous pouvez encore la modifier avant la deadline. On vous notifiera des prochaines étapes par mail.",
        ctaLabel: "Mettre à jour votre candidature",
      })
    }
  }, [user])

  const onChangeMathSprintTest = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      setMathSprintFile(null)
      setMathSprintError(null)
      return
    }

    if (file?.size > MAX_UPLOAD_SIZE) {
      setMathSprintError({message: 'La taille du fichier ne doit pas dépasser 3MB'})
      return
    }

    if (file?.type !== 'application/pdf') {
      setMathSprintError({message: 'Le fichier doit être sous format PDF'})
      return
    }
    
    setMathSprintFile(new File(
      [file],
      'math_sprint_test' + '.' + file.name.split('.').pop(),
      { type: file.type },
    ))
    setMathSprintError(null)
  }

  const onUploadMathSprintTest = async () => {
    if (!mathSprintFile) return

    try {
      const uploadFolderName = getUploadFolderName(user?.firstName, user?.lastName);
      await uploadFiles([mathSprintFile], user)
      await putApplication(user?.application?.id, {
        fileMathSprintTestUrl: `upload_mdm/${uploadFolderName}/${mathSprintFile.name}`,
      })
    } catch (e) {
      console.error('upload error', e)
    }
  }

  const applicationCard = (
    <Card>
      <CardHeader>
        <CardTitle>
          {content?.title}
        </CardTitle>
        <CardDescription>
          {content?.subtitle}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {user?.application && 
          <>
            <div className="text-sm"><span className="font-bold">Date de soumission</span>: {formatDate(user?.application?.createdAt)}</div>
            <div className="text-sm"><span className="font-bold">Date de sauvegarde</span>: {formatDate(user?.application?.updatedAt)}</div>
            <div className="text-sm"><span className="font-bold">Status</span>: <Badge className={`px-4 ${getBadgeClassname(user?.application?.status)}`}>{user?.application?.status}</Badge></div>
          </>
        }
      </CardContent>

      
      <CardFooter>
        <Button
          onClick={() => router.push('/application')}
        >
          {content?.ctaLabel}
        </Button>
      </CardFooter> 
    </Card>
  )

  const mathSprintTestCard = <>
    <Card>
      <CardHeader>
        <CardTitle>
          Vous n&apos;avez pas encore soumis votre devoir
        </CardTitle>
        <CardDescription>
          Il vous est demandé de rédiger votre devoir à la main, puis de scanner l&apos;ensemble de vos feuilles et de les regrouper dans un seul fichier.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Input
          id="fileMathSprintTest" 
          type="file"
          onChange={onChangeMathSprintTest}
        />

        <CardDescription className="mt-2 text-red-500">{mathSprintError?.message}</CardDescription>
      </CardContent>
      
      <CardFooter>
        <Button 
          disabled={!mathSprintFile || mathSprintError !== null}
          onClick={onUploadMathSprintTest}
        >
          Envoyer votre devoir
        </Button>
      </CardFooter> 
    </Card>
  </>

  return (
    <div className="space-y-6">
      <div>
        <div className="text-lg font-medium">Candidature individuelle</div>
        <p className="text-sm text-muted-foreground">
          C&apos;est ici que vous trouverez le statut de votre candidature.
        </p>
      </div>

      <Separator />

      {!user
        ? <ProfileSkeleton />
        : applicationCard
      }

      {user?.application?.status === 'COMPLETE' && 
        <>
          <div>
            <div className="text-lg font-medium">Devoir de sélection MathSprint</div>
            <p className="text-sm text-muted-foreground">
              C&apos;est ici que vous devrez uploader votre devoir de sélection Math Sprint.
            </p>
          </div>

          <Separator />

          {!user
            ? <ProfileSkeleton />
            : mathSprintTestCard
          }
        </>
      }
      
    </div>
  )
}
