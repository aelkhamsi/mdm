import { Controller, HttpCode, UseGuards, Post, Body } from '@nestjs/common';
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

  @Post('reminder')
  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles(ADMIN_ROLE)
  async sendReminderEmail(@Body() body: { activityName: string }) {
    const { activityName } = body;
    const users = await this.userService.findAll();
    const mathSprintUsers = users
      .filter((user) => {
        const choices = user.application?.activityChoices ?? [];
        return choices.includes(activityName);
      })
      .filter((user) => {
        return user.application?.status === 'DRAFT';
      });

    if (mathSprintUsers?.length) {
      await this.mailService.sendReminderEmail(
        users,
        activityName.split('_').join('-'),
      );
    }

    return { statusCode: 200 };
  }
}
