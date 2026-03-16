import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMathSprintFile1772833874411 implements MigrationInterface {
  name = 'AddMathSprintFile1772833874411';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`fileMathSprintTestUrl\` varchar(255) NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`fileMathSprintTestUrl\``,
    );
  }
}
