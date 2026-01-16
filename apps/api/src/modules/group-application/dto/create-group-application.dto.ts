import { IsOptional, IsString } from 'class-validator';
import { GroupApplicationStatus } from '../entities/group-application.entity';

export class CreateGroupApplicationDto {
  /* Personal informations */
  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsOptional()
  dateOfBirth: Date;

  @IsString()
  @IsOptional()
  identityCardNumber: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  region: string;

  @IsString()
  @IsOptional()
  phoneNumber: string;

  /* Files */
  // @IsString()
  // @IsOptional()
  // fileCnieUrl: string;

  // @IsString()
  // @IsOptional()
  // fileMembersCnieUrl: string;

  // @IsString()
  // @IsOptional()
  // fileGradesUrl: string;

  // @IsString()
  // @IsOptional()
  // fileParentalAuthorizationUrl: string;

  @IsString()
  @IsOptional()
  status: GroupApplicationStatus;
}
