import {
  educationLevelLabels,
  functionsLabels,
  regionLabels,
} from '../../labels';

export const rowFactory = (applications: any[], configService) => {
  const awsBucketName = configService.get('AWS_BUCKET_NAME');
  const awsBucketRegion = configService.get('AWS_BUCKET_REGION');

  return applications.map((application: any) => ({
    id: application?.id,
    firstName: application?.user?.firstName,
    lastName: application?.user?.lastName,
    email: application?.user?.email,
    dateOfBirth: new Date(application?.dateOfBirth),
    identityCardNumber: application?.identityCardNumber,
    city: application?.city,
    region: regionLabels[application?.region],
    phoneNumber: application?.phoneNumber,
    function: functionsLabels[application?.function],

    establishmentName: application?.establishmentName,
    establishmentCity: application?.establishmentCity,
    establishmentLevel: educationLevelLabels[application?.establishmentLevel],
    numberOfParticipants: application?.numberOfParticipants,

    fileCnie: {
      text: application?.fileCnieUrl ? 'link' : ' ',
      hyperlink: `https://${awsBucketName}.s3.${awsBucketRegion}.amazonaws.com/${application?.fileCnieUrl}`,
    },
    fileParticipantNamesUrl: {
      text: application?.fileParticipantNamesUrl ? 'link' : ' ',
      hyperlink: `https://${awsBucketName}.s3.${awsBucketRegion}.amazonaws.com/${application?.fileParticipantNamesUrl}`,
    },

    status: application?.status,
  }));
};
