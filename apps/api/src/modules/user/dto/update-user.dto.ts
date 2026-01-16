import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Application } from 'src/modules/application/entities/application.entity';
import { GroupApplication } from 'src/modules/group-application/entities/group-application.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  application?: Application;

  groupApplication?: GroupApplication;
}
