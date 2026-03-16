import { Module } from '@nestjs/common';
import { ExcelController } from './controllers/excel.controller';
import { ExcelService } from './services/excel.service';
import { ApplicationModule } from '../application/application.module';
import { GroupApplicationModule } from '../group-application/group-application.module';

@Module({
  imports: [ApplicationModule, GroupApplicationModule],
  controllers: [ExcelController],
  providers: [ExcelService],
  exports: [],
})
export class ExcelModule {}
