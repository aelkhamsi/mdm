type Step = {
  id: string,
  name: string,
  getFields: () => string[],
}

export const steps: Step[] = [
  {
    id: 'Étape 1',
    name: 'Informations Personnelles',
    getFields: () => ['firstName', 'lastName', 'dateOfBirth', 'identityCardNumber', 'city', 'region', 'phoneNumber', 'guardianFullName', 'guardianPhoneNumber', 'relationshipWithGuardian', 'specialConditions']
  },
  {
    id: 'Étape 1bis',
    name: "Options de compétitions",
    getFields: () => ['choices'],
  },
  {
    id: 'Étape 2',
    name: 'Éducation',
    getFields: () => ['educationLevel', 'educationField', 'highschool', 'averageGrade', 'ranking', 'mathAverageGrade', 'mathRanking', 'numberOfStudentsInClass']
  },
  {
    id: 'Étape 3',
    name: 'Compétition',
    getFields: () => ['hasPreviouslyParticipated', 'previousCompetitions', 'hasPreviouslyParticipatedInMtym', 'motivations', 'comments']
  },
  {
    id: 'Étape 4',
    name: 'Uploads',
    getFields: () => ['cnie', 'schoolCertificate', 'grades', 'regulations', 'parentalAuthorization']
  },
  { id: 'Étape 5', 
    name: 'Validation',
    getFields: () => ['termsAgreement']
  }
];

export { PersonalInformationStep } from './personal-information-step'
export { EducationStep } from './education-step'
export { CompetitionStep } from "./competition-step"
export { UploadStep } from './upload-step'
export { ValidationStep } from './validation-step'

