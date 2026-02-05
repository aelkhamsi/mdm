import { isOverEighteen } from '@mdm/utils'

type Step = {
  id: string,
  name: string,
  getFields: (formState?: any) => string[],
}

export const steps: Step[] = [
  {
    id: 'Étape 1',
    name: "Informations Personnelles de l'accompagnateur",
    getFields: () => ['firstName', 'lastName', 'dateOfBirth', 'city', 'region', 'identityCardNumber', 'phoneNumber', 'function'],
  },
  {
    id: 'Étape 2',
    name: "Informations sur l'école ou l'organisation",
    getFields: () => ['establishmentName', 'establishmentCity', 'establishmentLevel', 'numberOfParticipants']
  },
  {
    id: 'Étape 3',
    name: 'Uploads',
    getFields: (formState) => {
      const isFileUploaded = (key: string) => !!formState?.[`${key}Url`]
      return [
        !isFileUploaded('fileCnie') ? 'fileCnie' : '',
        !isFileUploaded('fileParticipantNames') ? 'fileParticipantNames' : '',
      ]
    }
  },
  { id: 'Étape 4', 
    name: 'Validation',
    getFields: () => ['termsAgreement']
  }
];

export { PersonalInformationStep } from './personal-information-step'
export { EstablishmentInformationStep } from './establishment-information-step'
export { UploadStep } from './upload-step'
export { ValidationStep } from './validation-step'
