import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupApplicationDto } from './create-group-application.dto';

export class UpdateGroupApplicationDto extends PartialType(CreateGroupApplicationDto) {}
