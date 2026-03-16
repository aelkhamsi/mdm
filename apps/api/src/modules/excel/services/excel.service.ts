import { BadRequestException, Injectable } from '@nestjs/common';
import { Workbook } from 'exceljs';
import { ApplicationService } from 'src/modules/application/services/application.service';
import * as tmp from 'tmp';
import { ConfigService } from '@nestjs/config';
import { rowFactory as applicationRowFactory } from '../config/applications/applications.excel';
import { styleSheet as styleApplicationsSheet } from '../config/applications/style.excel';
import { columns as applicationColumns } from '../config/applications/columns.excel';
import { rowFactory as groupApplicationRowFactory } from '../config/group-applications/applications.excel';
import { styleSheet as styleGroupApplicationsSheet } from '../config/group-applications/style.excel';
import { columns as groupApplicationColumns } from '../config/group-applications/columns.excel';
import { GroupApplicationService } from 'src/modules/group-application/services/group-application.service';
@Injectable()
export class ExcelService {
  constructor(
    private readonly applicationService: ApplicationService,
    private readonly groupApplicationService: GroupApplicationService,
    private readonly configService: ConfigService,
  ) {}

  async downloadApplications() {
    const workbook = new Workbook();
    const sheet = workbook.addWorksheet('applications');

    // colums
    sheet.columns = applicationColumns;

    // rows
    const rows = [];
    const result = await this.applicationService.findAll();
    const applications = applicationRowFactory(result, this.configService);
    applications.forEach((application: any) => {
      rows.push(Object.values(application));
    });
    sheet.addRows(rows);

    // style
    styleApplicationsSheet(sheet);

    const file = await new Promise((resolve) => {
      tmp.file(
        {
          discardDescriptor: true,
          prefix: 'applications',
          postfix: '.xlsx',
          mode: parseInt('0600', 8),
        },
        async (err, file) => {
          if (err) throw new BadRequestException(err);

          workbook.xlsx
            .writeFile(file)
            .then((_) => {
              resolve(file);
            })
            .catch((err) => {
              throw new BadRequestException(err);
            });
        },
      );
    });

    return file;
  }

  async downloadGroupApplications() {
    const workbook = new Workbook();
    const sheet = workbook.addWorksheet('group-applications');

    // colums
    sheet.columns = groupApplicationColumns;

    // rows
    const rows = [];
    const result = await this.groupApplicationService.findAll();
    const applications = groupApplicationRowFactory(result, this.configService);
    applications.forEach((application: any) => {
      rows.push(Object.values(application));
    });
    sheet.addRows(rows);

    // style
    styleGroupApplicationsSheet(sheet);

    const file = await new Promise((resolve) => {
      tmp.file(
        {
          discardDescriptor: true,
          prefix: 'group-applications',
          postfix: '.xlsx',
          mode: parseInt('0600', 8),
        },
        async (err, file) => {
          if (err) throw new BadRequestException(err);

          workbook.xlsx
            .writeFile(file)
            .then((_) => {
              resolve(file);
            })
            .catch((err) => {
              throw new BadRequestException(err);
            });
        },
      );
    });

    return file;
  }
}
