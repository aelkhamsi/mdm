
import { z } from 'zod';
import { groupApplicationSchema } from '@/app/schemas/group-application.schema';
import { User } from '@mdm/types';
import { useState } from 'react';
import { toast } from "@mdm/ui";
import { postGroupApplication, putGroupApplication } from '@/app/api/GroupApplicationApi';
import { excludeFileFields, serializeApplication } from '../serialization';
import { useFileUpload } from './use-file-upload';
import { UseFormReturn } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export const useApplicationHandlers = (
  user: User|undefined
) => {
  const router = useRouter()
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [error, setError] = useState<any>(undefined);
  const {
    getFiles,
    uploadFiles,
    updateApplicationFiles,
  } = useFileUpload()

  const onSubmit = async (formData: z.infer<typeof groupApplicationSchema>) => {
    setIsFormLoading(true);

    try {
      // Post application
      const applicationResponse = await postGroupApplication(
        excludeFileFields(serializeApplication(formData))
      ) as any

      if (applicationResponse?.statusCode !== 200) {
        throw new Error(applicationResponse?.message ?? 'Post of application failed')
      }

      // Upload files
      const files = getFiles(formData)
      await uploadFiles(files, user)
      await updateApplicationFiles(formData, files, user)
      
      // Update application status
      const applicationId = applicationResponse?.id;
      await putGroupApplication(applicationId, { status: 'COMPLETE' }) as any;

      toast({
        title: 'Application created with success',
        description: 'You can access your current application in your profile page',
      });

      router.push('/profile/group-application')
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    } 
    catch(err: any) 
    {
      setError(err);
      setShowErrorDialog(true);
    } 
    finally 
    {
      setIsFormLoading(false);
    }
  }

  const onSave = async (form: UseFormReturn) => {
    const application = form.watch()

    try {
      const applicationResponse = await postGroupApplication(
        excludeFileFields(serializeApplication(application))
      ) as any;

      if (applicationResponse?.statusCode !== 200) {
        throw new Error(applicationResponse?.message ?? 'Post of application failed')
      }

      toast({
        title: 'Application saved successfully',
        description: 'You can access your current application in your profile page',
      });
      
      router.push('/profile/group-application')
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    } catch(err: any) {
      setError(err);
      setShowErrorDialog(true);
    }    
  }

  const onError = async (errors: any) => {}

  return {
    onSubmit,
    onSave,
    onError,
    isFormLoading,
    setIsFormLoading,
    showErrorDialog,
    setShowErrorDialog,
    error,
    setError,
  }
}
