import { z } from 'zod'
import { applicationSchema } from "@/app/schemas/application.schema"
import { computeSHA256, generateFileName, getUploadFolderName } from '@/app/lib/utils';
import { User } from '@mdm/types';
import { getSignedURL, uploadFile } from '@/app/api/MediaApi';
import { putApplication } from '@/app/api/ApplicationApi';

export const useFileUpload = () => {
  const getFiles = (
    formData: z.infer<typeof applicationSchema>
  ) => {
    const { fileCnie, fileMembersCnie, fileGrades, fileParentalAuthorization } = formData;
    const uploadFileNames = ['cnie', 'members_cnie', 'grades', 'parental_authorization']
      .map(name => `${name}_${generateFileName()}`)
    const files = [fileCnie, fileMembersCnie, fileGrades, fileParentalAuthorization]
      .map((files, index) => {
        if (files) {
          return new File(
            [files[0]], 
            uploadFileNames[index] + '.' + files[0].name.split('.').pop(),
            { type: files[0].type },
          )
        }
        
        return files
      })
    
    return files
  }

  const uploadFiles = async (
    files: File[], 
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
    applicationId: number, 
    files: File[], 
    user: User|undefined
  ) => {
    const uploadFolderName = getUploadFolderName(user?.firstName, user?.lastName);

    await putApplication(applicationId, {
      fileCnieUrl: files[0] ? `upload_mdm/${uploadFolderName}/${files[0].name}` : '',
      fileMembersCnieUrl: files[1] ? `upload_mdm/${uploadFolderName}/${files[1].name}` : '',
      fileGradesUrl: files[2] ? `upload_mdm/${uploadFolderName}/${files[2].name}` : '',
      fileParentalAuthorizationUrl: files[3] ? `upload_mdm/${uploadFolderName}/${files[3].name}` : '',
    }) as any
  }

  return {
    getFiles,
    uploadFiles,
    updateApplicationFiles,
  }
}
