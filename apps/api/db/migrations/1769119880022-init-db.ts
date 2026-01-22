import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDb1769119880022 implements MigrationInterface {
  name = 'InitDb1769119880022';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`applications\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL DEFAULT '', \`lastName\` varchar(255) NOT NULL DEFAULT '', \`dateOfBirth\` timestamp NULL, \`identityCardNumber\` varchar(255) NOT NULL DEFAULT '', \`city\` varchar(255) NOT NULL DEFAULT '', \`region\` varchar(255) NOT NULL DEFAULT '', \`phoneNumber\` varchar(255) NOT NULL DEFAULT '', \`guardianFullName\` varchar(255) NOT NULL DEFAULT '', \`guardianPhoneNumber\` varchar(255) NOT NULL DEFAULT '', \`relationshipWithGuardian\` varchar(255) NOT NULL DEFAULT '', \`activityChoices\` text NOT NULL, \`educationLevel\` varchar(255) NOT NULL DEFAULT '', \`educationField\` varchar(255) NOT NULL DEFAULT '', \`highschool\` varchar(255) NOT NULL DEFAULT '', \`averageGrade\` varchar(255) NOT NULL DEFAULT '', \`mathAverageGrade\` varchar(255) NOT NULL DEFAULT '', \`ranking\` varchar(255) NOT NULL DEFAULT '', \`mathRanking\` varchar(255) NOT NULL DEFAULT '', \`numberOfStudentsInClass\` varchar(255) NOT NULL DEFAULT '', \`hasPreviouslyParticipated\` varchar(255) NOT NULL DEFAULT '', \`previousCompetitions\` text NULL, \`standSubjectTitle\` varchar(255) NOT NULL DEFAULT '', \`standSubjectDetails\` text NULL, \`standMembers\` text NOT NULL, \`motivations\` text NULL, \`comments\` text NULL, \`fileCnieUrl\` varchar(255) NULL, \`fileMembersCnieUrl\` varchar(255) NULL, \`fileStandAbstractUrl\` varchar(255) NULL, \`fileGradesUrl\` varchar(255) NULL, \`fileParentalAuthorizationUrl\` varchar(255) NULL, \`status\` varchar(255) NOT NULL DEFAULT 'DRAFT', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` int NULL, UNIQUE INDEX \`REL_90ad8bec24861de0180f638b9c\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`group_applications\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL DEFAULT '', \`lastName\` varchar(255) NOT NULL DEFAULT '', \`dateOfBirth\` timestamp NULL, \`identityCardNumber\` varchar(255) NOT NULL DEFAULT '', \`city\` varchar(255) NOT NULL DEFAULT '', \`region\` varchar(255) NOT NULL DEFAULT '', \`phoneNumber\` varchar(255) NOT NULL DEFAULT '', \`establishmentName\` varchar(255) NOT NULL DEFAULT '', \`establishmentCity\` varchar(255) NOT NULL DEFAULT '', \`establishmentLevel\` varchar(255) NOT NULL DEFAULT '', \`numberOfParticipants\` varchar(255) NOT NULL DEFAULT '', \`fileCnieUrl\` varchar(255) NULL, \`fileParticipantNamesUrl\` varchar(255) NULL, \`status\` varchar(255) NOT NULL DEFAULT 'DRAFT', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` int NULL, UNIQUE INDEX \`REL_3c07fe87d5afd427985b1a06d2\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`identifier\` varchar(255) NOT NULL DEFAULT '', \`firstName\` varchar(255) NOT NULL DEFAULT '', \`lastName\` varchar(255) NOT NULL DEFAULT '', \`email\` varchar(255) NOT NULL DEFAULT '', \`password\` varchar(255) NOT NULL DEFAULT '', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`applicationId\` int NULL, \`groupApplicationId\` int NULL, UNIQUE INDEX \`REL_315a6ad486c15783fb06517691\` (\`applicationId\`), UNIQUE INDEX \`REL_e523679603665ff991b98003f8\` (\`groupApplicationId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`admin_users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL DEFAULT '', \`password\` varchar(255) NOT NULL DEFAULT '', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` ADD CONSTRAINT \`FK_90ad8bec24861de0180f638b9cc\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`group_applications\` ADD CONSTRAINT \`FK_3c07fe87d5afd427985b1a06d2a\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD CONSTRAINT \`FK_315a6ad486c15783fb065176918\` FOREIGN KEY (\`applicationId\`) REFERENCES \`applications\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD CONSTRAINT \`FK_e523679603665ff991b98003f89\` FOREIGN KEY (\`groupApplicationId\`) REFERENCES \`group_applications\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_e523679603665ff991b98003f89\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_315a6ad486c15783fb065176918\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`group_applications\` DROP FOREIGN KEY \`FK_3c07fe87d5afd427985b1a06d2a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`applications\` DROP FOREIGN KEY \`FK_90ad8bec24861de0180f638b9cc\``,
    );
    await queryRunner.query(`DROP TABLE \`admin_users\``);
    await queryRunner.query(
      `DROP INDEX \`REL_e523679603665ff991b98003f8\` ON \`users\``,
    );
    await queryRunner.query(
      `DROP INDEX \`REL_315a6ad486c15783fb06517691\` ON \`users\``,
    );
    await queryRunner.query(`DROP TABLE \`users\``);
    await queryRunner.query(
      `DROP INDEX \`REL_3c07fe87d5afd427985b1a06d2\` ON \`group_applications\``,
    );
    await queryRunner.query(`DROP TABLE \`group_applications\``);
    await queryRunner.query(
      `DROP INDEX \`REL_90ad8bec24861de0180f638b9c\` ON \`applications\``,
    );
    await queryRunner.query(`DROP TABLE \`applications\``);
  }
}
