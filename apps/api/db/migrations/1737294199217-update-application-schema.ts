import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateApplicationSchema1737294199217
  implements MigrationInterface
{
  name = 'UpdateApplicationSchema1737294199217';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`activityChoices\` text NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`videoTitle\` varchar(255) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`videoLink\` varchar(255) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`videoSubject\` text NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`videoMotivations\` text NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`videoRessources\` text NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`standSubjectTitle\` varchar(255) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`standSubjectDetails\` text NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`standMembers\` text NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`fileCnieUrl\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`fileMembersCnieUrl\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`fileGradesUrl\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD \`fileParentalAuthorizationUrl\` varchar(255) NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`fileParentalAuthorizationUrl\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`fileGradesUrl\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`fileMembersCnieUrl\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`fileCnieUrl\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`standMembers\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`standSubjectDetails\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`standSubjectTitle\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`videoRessources\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`videoMotivations\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`videoSubject\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`videoLink\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`videoTitle\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP COLUMN \`activityChoices\``,
    );
  }
}
