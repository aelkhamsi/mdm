import { Controller, HttpCode, UseGuards, Post } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { ADMIN_ROLE } from 'src/constants';
import { UserService } from 'src/modules/user/services/user.service';
import { MailService } from './mail.service';

@Controller('mdm-api/mailer')
export class MailController {
  constructor(
    private readonly userService: UserService,
    private readonly mailService: MailService,
  ) {}

  @Post('math-sprint-reminder')
  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles(ADMIN_ROLE)
  async sendMathSprintReminder() {
    const users = await this.userService.findAll();

    const mathSprintUsers = users
      .filter((user) => {
        const choices = user.application?.activityChoices ?? [];
        return choices.includes('math_sprint');
      })
      .filter((user) => {
        return user.application?.status === 'DRAFT';
      });

    if (mathSprintUsers?.length) {
      await this.mailService.sendApplicationReminderEmail(users);
    }

    console.log('done');

    return { statusCode: 200 };
  }
}
