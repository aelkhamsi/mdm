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
    console.log(
      'users',
      users.map((user) => user.email),
    );
    await this.mailService.sendApplicationReminderEmail(users);
    return { statusCode: 200 };
  }
}
