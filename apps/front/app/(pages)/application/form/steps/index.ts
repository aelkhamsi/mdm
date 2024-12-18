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
    getFields: () => ['activityChoices'],
  },
  {
    id: 'Étape 3',
    name: 'Éducation',
    getFields: (formState: any) => {
      const isMathSprint = formState?.activityChoices?.find((choice: string) => choice === 'math_sprint') ? true : false
      const isBestMathVideo = formState?.activityChoices?.find((choice: string) => choice === 'best_mathematical_video') ? true : false

      return [...(isMathSprint || isBestMathVideo ? ['educationLevel', 'educationField', 'highschool'] : []), ...(isMathSprint ? ['averageGrade', 'ranking', 'mathAverageGrade', 'mathRanking', 'numberOfStudentsInClass'] : [])]
    }
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

