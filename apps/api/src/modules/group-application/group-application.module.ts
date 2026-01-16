import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupApplication } from './entities/group-application.entity';
import { GroupApplicationController } from './controllers/group-application.controller';
import { GroupApplicationService } from './services/group-application.service';
import { UserModule } from '../user/user.module';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([GroupApplication]),
  ],
  controllers: [GroupApplicationController],
  providers: [
    GroupApplicationService
  ],
  exports: [
    GroupApplicationService
  ],
})
export class GroupApplicationModule {}
