import { isOverEighteen } from '@mdm/utils';

type Step = {
  id: string,
  name: string,
  getFields: (formState: any) => string[],
}

export const steps: Step[] = [
  {
    id: 'Étape 1',
    name: 'Informations Personnelles',
    getFields: (formState: any) => {
      const dob = formState?.dateOfBirth
      const isAdult = isOverEighteen(dob)
      return ['firstName', 'lastName', 'dateOfBirth', 'identityCardNumber', 'city', 'region', 'phoneNumber', ...(!isAdult ? ['guardianFullName', 'guardianPhoneNumber', 'relationshipWithGuardian'] : [])]
    }
  },
  {
    id: 'Étape 2',
    name: "Choix de compétitions",
    getFields: () => ['choices'],
  },
  {
    id: 'Étape 3',
    name: 'Éducation',
    getFields: () => ['educationLevel', 'educationField', 'highschool', 'averageGrade', 'ranking', 'mathAverageGrade', 'mathRanking', 'numberOfStudentsInClass']
  },
  {
    id: 'Étape 4',
    name: 'Motivations',
    getFields: () => ['hasPreviouslyParticipated', 'previousCompetitions', 'hasPreviouslyParticipatedInMtym', 'motivations', 'comments']
  },
  {
    id: 'Étape 5',
    name: 'Uploads',
    getFields: () => ['cnie', 'schoolCertificate', 'grades', 'regulations', 'parentalAuthorization']
  },
  { id: 'Étape 6', 
    name: 'Validation',
    getFields: () => ['termsAgreement']
  }
];

export { PersonalInformationStep } from './personal-information-step'
export { EducationStep } from './education-step'
export { CompetitionStep } from "./competition-step"
export { UploadStep } from './upload-step'
export { ValidationStep } from './validation-step'

