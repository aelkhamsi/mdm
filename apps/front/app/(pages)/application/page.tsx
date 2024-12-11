"use client"

import React from 'react'
import { FormLayout, getFormSchema } from '@mdm/forms'
import { applicationFormConfig } from '@/app/forms.config'
import { z } from "zod"

const ProfilePage = () => {
  const formSchema = getFormSchema(applicationFormConfig)

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
  }

  const onSave = async () => {   
  }

  const onError = async (errors: any) => {
  }

  return (
    <div className="z-10 w-full px-5 max-w-screen-xl xl:px-0">
      <div className="space-y-6 p-10 pb-16">
        <FormLayout 
          formConfig={applicationFormConfig}
          title='Application Form'
          description='This is a description of the application form'
          onSubmitButtonLabel='Submit Application'
          onSaveButtonLabel='Save & Continue later'
          onSubmit={onSubmit}
          onSave={onSave}
          onError={onError}
        />
      </div>
    </div>
  )
}

export default ProfilePage
