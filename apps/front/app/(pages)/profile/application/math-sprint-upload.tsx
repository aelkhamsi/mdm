"use client"

import { Input, LoadingDots, Separator } from "@mdm/ui"
import { ChangeEvent, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@mdm/ui";
import { Button } from "@mdm/ui";
import { useAtomValue } from "jotai";
import { userAtom } from "@/app/store/userAtom";
import { ProfileSkeleton } from "@mdm/ui";
import { useFileUpload } from "@/app/(pages)/application/hooks/use-file-upload";
import { getUploadFolderName } from "@/app/lib/utils";
import { putApplication } from "@/app/api/ApplicationApi";
import { ActivityChoiceValues } from "@/app/(pages)/application/form/steps/activity-choice-step";
import FormErrorDialog from "../../application/form/error/form-error-dialog";

const MathSprintUpload = () => {  
  const user = useAtomValue(userAtom)
  const [mathSprintFile, setMathSprintFile] = useState<File | null>(null)
  const [validationError, setValidationError] = useState<{message: string} | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [inputLabel, setInputLabel] = useState<string>('')
  const [inputPlaceholder, setInputPlaceholder] = useState<string>('')
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false)
  const [error, setError] = useState<any>(undefined)
  const [showErrorDialog, setShowErrorDialog] = useState<boolean>(false)
  const { uploadFiles } = useFileUpload()
  const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
  const isVisible = user?.application?.status === 'COMPLETE' && user?.application?.activityChoices?.includes(ActivityChoiceValues.MATH_SPRINT)

  useEffect(() => {
    const isUploaded = user?.application?.fileMathSprintTestUrl !== null
    setIsFileUploaded(isUploaded)
    setInputLabel(isUploaded ? 'Modifier le fichier' : 'Ajouter un fichier')
    setInputPlaceholder(isUploaded ? '✅ Fichier Uploadé!' : 'Aucun fichier')
  }, [user])

  const onChangeMathSprintTest = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      setMathSprintFile(null)
      setValidationError(null)
      setInputPlaceholder(isFileUploaded ? '✅ Fichier Uploadé!' : 'Aucun fichier')
      return
    }

    if (file?.size > MAX_UPLOAD_SIZE) {
      setValidationError({message: 'La taille du fichier ne doit pas dépasser 3MB'})
      return
    }

    if (file?.type !== 'application/pdf') {
      setValidationError({message: 'Le fichier doit être sous format PDF'})
      return
    }
    
    setMathSprintFile(new File(
      [file],
      'math_sprint_test' + '.' + file.name.split('.').pop(),
      { type: file.type },
    ))
    setInputPlaceholder(file ? file?.name : inputPlaceholder)
    setValidationError(null)
  }

  const onUploadMathSprintTest = async () => {
    if (!mathSprintFile) return
    setIsLoading(true)

    try {
      const uploadFolderName = getUploadFolderName(user?.firstName, user?.lastName);
      await uploadFiles([mathSprintFile], user)
      await putApplication(user?.application?.id, {
        fileMathSprintTestUrl: `upload_mdm/${uploadFolderName}/${mathSprintFile.name}`,
      })
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    } catch (e) {
      console.error('upload error', e)
      setIsLoading(false)
      setError(e)
      setShowErrorDialog(true)
    }
  }

  const mathSprintTestCard = <>
    <Card>
      <CardHeader>
        <CardTitle>
          {isFileUploaded 
            ? 'Vous avez bien soumis votre devoir ✅' 
            : "Vous n'avez pas encore soumis votre devoir ⚠️"
          }
          
        </CardTitle>
        <CardDescription>
          Il vous est demandé de rédiger votre devoir à la main, puis de scanner l&apos;ensemble de vos feuilles et de les regrouper dans un seul fichier PDF.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Input
          id="fileMathSprintTest" 
          type="file"
          className="hidden"
          onChange={onChangeMathSprintTest}
        />
        <label 
          htmlFor='fileMathSprintTest' 
          className="block flex gap-x-4 text-sm hover:cursor-pointer border rounded-md px-4 py-2"
        >
          <div className="font-medium">{inputLabel}</div>
          <div>{inputPlaceholder}</div>
        </label>

        <CardDescription className="mt-2 text-red-500">{validationError?.message}</CardDescription>
      </CardContent>
      
      <CardFooter>
        <Button 
          disabled={!mathSprintFile || validationError !== null}
          onClick={onUploadMathSprintTest}
        >
          {isLoading
            ? <LoadingDots color="#808080" />
            : (isFileUploaded ? 'Mettre à jour votre devoir' : 'Soumettre votre devoir')
          }
        </Button>
      </CardFooter> 
    </Card>
  </>
  
  if (!isVisible) return
  
  return <>
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

    <FormErrorDialog showDialog={showErrorDialog} setShowDialog={setShowErrorDialog} error={error} />
  </>
}

export default MathSprintUpload
