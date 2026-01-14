import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './entities/application.entity';
import { ApplicationController } from './controllers/application.controller';
import { ApplicationService } from './services/application.service';
import { UserModule } from '../user/user.module';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([Application]),
  ],
  controllers: [ApplicationController],
  providers: [
    ApplicationService
  ],
  exports: [
    ApplicationService
  ],
})
export class ApplicationModule {}
