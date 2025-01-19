import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetDefaultStatusToDraft1737313036192
  implements MigrationInterface
{
  name = 'SetDefaultStatusToDraft1737313036192';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`applications_status\` CHANGE \`status\` \`status\` varchar(255) NOT NULL DEFAULT 'DRAFT'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`applications_status\` CHANGE \`status\` \`status\` varchar(255) NOT NULL DEFAULT 'PENDING'`,
    );
  }
}
