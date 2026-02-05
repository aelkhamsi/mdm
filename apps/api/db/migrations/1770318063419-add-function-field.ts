import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFunctionField1770318063419 implements MigrationInterface {
  name = 'AddFunctionField1770318063419';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`group_applications\` ADD \`function\` varchar(255) NOT NULL DEFAULT ''`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`group_applications\` DROP COLUMN \`function\``,
    );
  }
}
