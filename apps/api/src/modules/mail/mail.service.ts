import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from 'src/modules/user/entities/user.entity';
import * as path from 'path';

@Injectable()
export class MailService {
  constructor(
    private readonly configService: ConfigService,
    private readonly mailerService: MailerService,
  ) {}

  async sendResetPasswordEmail(user: User, accessToken: string) {
    const link =
      this.configService.get('app.nodenv') === 'production'
        ? `https://mdm.mathmaroc.org/reset-password?token=${accessToken}`
        : `http://localhost:3000/reset-password?token=${accessToken}`;

    await this.mailerService.sendMail({
      to: user?.email,
      subject: 'Réinitialiser votre mot de passe',
      template: 'reset-password',
      context: {
        firstName: user?.firstName,
        link,
      },
    });
  }

  async sendEmailVerificationEmail(user: User, verificationCode: string) {
    await this.mailerService.sendMail({
      to: user?.email,
      subject: 'Vérifier votre email',
      template: 'email-verification',
      context: {
        firstName: user?.firstName,
        verificationCode,
      },
    });
  }

  async sendReminderEmail(users: User[], templateName: string) {
    const capitalize = (s) =>
      (s && String(s[0]).toUpperCase() + String(s).slice(1)) || '';
    if (!users) return;

    const BATCH_SIZE = 20;
    const DELAY_MS = 1000;
    const emailList = users.map((user) => user?.email).filter(Boolean);
    const batches = [];

    await this.mailerService.sendMail({
      to: 'achrafelkhamsi@gmail.com',
      subject: 'Vérifier votre email',
      template: 'test',
      context: {
        emails: emailList,
      },
    });

    return;

    for (let i = 0; i < emailList.length; i += BATCH_SIZE) {
      batches.push(emailList.slice(i, i + BATCH_SIZE));
    }

    for (const batch of batches) {
      await this.mailerService.sendMail({
        to: batch,
        subject: `Complétez votre candidature ${capitalize(
          templateName.split('-').join(' '),
        )}`,
        template: `${templateName}-reminder`,
        attachments: [
          {
            filename: 'devoir_maison.pdf',
            path: path.join(
              __dirname,
              '..',
              '..',
              '..',
              'attachments',
              'devoir_maison.pdf',
            ),
            contentType: 'application/pdf',
          },
        ],
      });

      await new Promise((resolve) => setTimeout(resolve, DELAY_MS));
    }
  }
}
