import { z } from 'zod'
import { groupApplicationSchema } from "@/app/schemas/group-application.schema"
import { computeSHA256, generateFileName, getUploadFolderName } from '@/app/lib/utils';
import { User } from '@mdm/types';
import { getSignedURL, uploadFile } from '@/app/api/MediaApi';
import { putGroupApplication } from '@/app/api/GroupApplicationApi';

export const useFileUpload = () => {
  const getFiles = (
    formData: z.infer<typeof groupApplicationSchema>
  ) => {
    const { fileCnie, fileParticipantNames } = formData;
    const uploadFileNames = ['cnie', 'participant_names']
      .map(name => `${name}_${generateFileName()}`)
    const files = [fileCnie, fileParticipantNames]
      .map((files, index) => {
        if (files && files.length) {
          return new File(
            [files[0]], 
            uploadFileNames[index] + '.' + files[0]?.name.split('.').pop(),
            { type: files[0]?.type },
          )
        }
        
        return undefined
      })
    
    return files
  }

  const uploadFiles = async (
    files: (File|undefined)[], 
    user: User|undefined
  ) => {
    const uploadFolderName = getUploadFolderName(user?.firstName, user?.lastName);

    for (const file of files) {
      if (file) {
        const checksum = await computeSHA256(file);
        const signedURLResponse = await getSignedURL(`upload_mdm/${uploadFolderName}/${file.name}`, file.type, file.size, checksum) as any;
        await uploadFile(signedURLResponse?.url, file) as any;
      }
    }
  }

  const updateApplicationFiles = async (
    formData: z.infer<typeof groupApplicationSchema>, 
    files: (File|undefined)[], 
    user: User|undefined
  ) => {
    const uploadFolderName = getUploadFolderName(user?.firstName, user?.lastName);

    await putGroupApplication(formData?.id, {
      fileCnieUrl: files[0] ? `upload_mdm/${uploadFolderName}/${files[0].name}` : (formData?.fileCnieUrl ?? null),
      fileParticipantNamesUrl: files[1] ? `upload_mdm/${uploadFolderName}/${files[1].name}` : (formData?.fileParticipantNamesUrl ?? null),
    }) as any
  }

  return {
    getFiles,
    uploadFiles,
    updateApplicationFiles,
  }
}
