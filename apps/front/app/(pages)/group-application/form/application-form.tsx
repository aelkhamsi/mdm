"use client"

import { useState } from "react"
import { FormSteps } from "./header/form-steps"
import { FormNavigation } from "./navigation/form-navigation"
import { EstablishmentInformationStep, PersonalInformationStep, UploadStep, ValidationStep } from "./steps"
import { useForm } from "react-hook-form"
import { groupApplicationSchema, getGroupApplicationDefaultValues } from "@/app/schemas/group-application.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { sanitizeApplication } from "@/app/lib/utils"
import { z } from "zod"
import { Form } from "@mdm/ui"
import { Button, Separator } from "@mdm/ui"
import { LoadingDots } from "@mdm/ui"
import { User } from "@mdm/types"
import FormHeader from "./header/form-header"
import FormErrorDialog from "./error/form-error-dialog"
import { useApplicationHandlers } from "@/app/(pages)/group-application/hooks/use-application-handlers"

export const ApplicationForm = ({
  user
}:{
  user: User|undefined
}) => {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const delta = currentStep - previousStep
  const form = useForm<z.infer<typeof groupApplicationSchema>>({
    resolver: zodResolver(groupApplicationSchema),
    defaultValues: user?.groupApplication 
      ? {...sanitizeApplication(user?.groupApplication), firstName: user?.firstName, lastName: user?.lastName} 
      : getGroupApplicationDefaultValues(user),
    mode: "onChange",
  })
  const {
    onSubmit,
    onSave,
    onError,
    setShowErrorDialog,
    isFormLoading,
    showErrorDialog,
    error,
  } = useApplicationHandlers(user)
  const onClickSave = () => {
    onSave(form)
  }

  return (
    <section className='w-full inset-0 flex flex-col justify-between mt-6 mb-20'>
      {/* Header */}
      <FormHeader onClickSave={onClickSave} />
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
        <form onSubmit={form.handleSubmit(() => {}, onError)}>
          {/* Personal informations */}
          {currentStep === 0 && (
            <PersonalInformationStep form={form} delta={delta} />
          )}

          {currentStep === 1 && (
            <EstablishmentInformationStep form={form} delta={delta} />
          )}

          {currentStep === 2 && (
            <UploadStep form={form} delta={delta} />
          )}

          {currentStep === 3 && (
            <ValidationStep form={form} delta={delta} />
          )}

          {/* Submit Button */}
          {currentStep === 3 && (
            <div className='mt-20 text-center'> 
              <Button type="submit" onClick={() => onSubmit(form.watch())}>
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