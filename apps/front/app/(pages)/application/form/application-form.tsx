"use client"

import { useState } from "react"
import { FormSteps } from "./header/form-steps"
import { FormNavigation } from "./navigation/form-navigation"
import { PersonalInformationStep, EducationStep, CompetitionStep, UploadStep, ValidationStep } from "./steps"
import { useForm } from "react-hook-form"
import { applicationSchema, getApplicationDefaultValues } from "@/app/schemas/application.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { computeSHA256, excludeFileFields, generateFileName, getUploadFolderName, sanitizeApplication } from "@/app/lib/utils"
import { z } from "zod"
import { Form } from "@mdm/ui"
import { Button, Separator } from "@mdm/ui"
import { toast } from "@mdm/ui";
import { postApplication, putApplication, updateApplicationStatus } from "@/app/api/ApplicationApi"
import { useRouter } from "next/navigation"
import { getSignedURL, uploadFile } from "@/app/api/MediaApi"
import { LoadingDots } from "@mdm/ui"
import { User } from "@mdm/types"
import FormHeader from "./header/form-header"
import FormErrorDialog from "./error/form-error-dialog"

export const ApplicationForm = ({
  user
}:{
  user: User|undefined
}) => {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [error, setError] = useState<any>(undefined);

  const router = useRouter()
  const delta = currentStep - previousStep
  const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
    defaultValues: user?.application 
      ? {...sanitizeApplication(user?.application), firstName: user?.firstName, lastName: user?.lastName} 
      : getApplicationDefaultValues(user),
    mode: "onChange",
  })

  const onSubmit = async (formData: z.infer<typeof applicationSchema>) => {
    setIsFormLoading(true);
    const { cnie, schoolCertificate, grades, regulations, parentalAuthorization } = formData;
    const uploadFolderName = getUploadFolderName(user?.firstName, user?.lastName);
    const uploadFileNames = ['cnie', 'school_certificate', 'grades', 'regulations', 'parental_authorization']
      .map(name => `${name}_${generateFileName()}`)
    const files = [cnie, schoolCertificate, grades, regulations, parentalAuthorization]
      .map((files, index) => new File(
        [files[0]], 
        uploadFileNames[index] + '.' + files[0].name.split('.').pop(),
        { type: files[0].type },
      ))
    
    try {
      // Post application
      const applicationResponse = await postApplication(excludeFileFields(formData)) as any

      if (applicationResponse?.statusCode !== 200) {
        throw new Error(applicationResponse?.message ?? 'Post of application failed')
      }

      const applicationId = applicationResponse?.id;

      // Upload files
      for (const file of files) {
        const checksum = await computeSHA256(file);
        const signedURLResponse = await getSignedURL(`upload_mtym/${uploadFolderName}/${file.name}`, file.type, file.size, checksum) as any;
        await uploadFile(signedURLResponse?.url, file) as any;
      }

      // Update Application upload links
      await putApplication(applicationId, {
        cnieUrl: `upload_mtym/${uploadFolderName}/${files[0].name}`,
        schoolCertificateUrl: `upload_mtym/${uploadFolderName}/${files[1].name}`,
        gradesUrl: `upload_mtym/${uploadFolderName}/${files[2].name}`,
        regulationsUrl: `upload_mtym/${uploadFolderName}/${files[3].name}`,
        parentalAuthorizationUrl: `upload_mtym/${uploadFolderName}/${files[4].name}`,
      }) as any

      // Update Application status
      await updateApplicationStatus(applicationId, { status: user?.application?.status?.status === 'NOTIFIED'
        ? 'UPDATED'
        : 'PENDING'
      }) as any;

      toast({
        title: 'Application created with success',
        description: 'You can access your current application in your profile page',
      });

      router.push('/profile/application')
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    } catch(err: any) {
      setError(err);
      setShowErrorDialog(true);
    } finally {
      setIsFormLoading(false);
    }
  }

  const onSave = async () => {
    const application = form.watch()

    try {
      const applicationResponse = await postApplication(excludeFileFields(application)) as any;

      if (applicationResponse?.statusCode !== 200) {
        throw new Error(applicationResponse?.message ?? 'Post of application failed')
      }

      toast({
        title: 'Application saved successfully',
        description: 'You can access your current application in your profile page',
      });
      
      router.push('/profile/application')
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    } catch(err: any) {
      setError(err);
      setShowErrorDialog(true);
    }    
  }

  const onError = async (errors: any) => {
    toast({
      title: "The form is invalid",
      description: "Not all required fields have been filled in.",
      variant: 'destructive',
    })
  }

  return (
    <section className='w-full inset-0 flex flex-col justify-between mt-6'>
      {/* Header */}
      <FormHeader onSave={onSave} />
      <Separator className="my-6" />
      <FormSteps currentStep={currentStep} />

      {/* Top Navigation */}
      <FormNavigation
        variant="arrows"
        currentStep={currentStep}
        form={form}
        setPreviousStep={setPreviousStep} 
        setCurrentStep={setCurrentStep} 
      />

      {/* Form */}
      <Form {...form}>
        <form className='mt-6' onSubmit={form.handleSubmit(onSubmit, onError)}>
          {/* Personal informations */}
          {currentStep === 0 && (
            <PersonalInformationStep form={form} delta={delta} />
          )}

          {currentStep === 1 && (
            <EducationStep form={form} delta={delta} />
          )}

          {currentStep === 2 && (
            <CompetitionStep form={form} delta={delta} />
          )}

          {currentStep === 3 && (
            <UploadStep form={form} delta={delta} />
          )}

          {currentStep === 4 && (
            <ValidationStep form={form} delta={delta} />
          )}

          {/* Submit Button */}
          {currentStep === 4 && (
            <div className='mt-20 text-center'> 
              <Button type="submit">
                {isFormLoading ? (
                  <LoadingDots color="#808080" />
                ) : (
                  <div>Soumettre ma candidature</div>
                )}
              </Button>
            </div>
          )}
        </form>
      </Form>
      
      {/* Bottom Navigation */}
      <FormNavigation
        variant="button"
        form={form}
        currentStep={currentStep} 
        setPreviousStep={setPreviousStep} 
        setCurrentStep={setCurrentStep} 
      />

      <FormErrorDialog showDialog={showErrorDialog} setShowDialog={setShowErrorDialog} error={error} />
    </section>
  )
}