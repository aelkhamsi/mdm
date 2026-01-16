import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  Request,
  ForbiddenException,
} from '@nestjs/common';
import { GroupApplicationService } from '../services/group-application.service';
import { SerializedGroupApplication } from '../entities/serialized-group-application.entity';
import { CreateGroupApplicationDto } from '../dto/create-group-application.dto';
import { UpdateGroupApplicationDto } from '../dto/update-group-application.dto';
import { RolesGuard } from 'src/guards/roles.guard';
import { ADMIN_ROLE } from 'src/constants';
import { Roles } from 'src/decorators/roles.decorator';
import { UserService } from 'src/modules/user/services/user.service';
import { SerializedUser } from 'src/modules/user/entities/serialized-user';

@Controller('mdm-api/group-applications')
export class GroupApplicationController {
  constructor(
    private readonly groupApplicationService: GroupApplicationService,
    private readonly userService: UserService,
  ) {}

  @Get('user/:id')
  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles(ADMIN_ROLE)
  async findByUserId(@Param('id', ParseIntPipe) id: number) {
    const groupApplication = await this.groupApplicationService.findOneByUserId(+id);
    if (!groupApplication) {
      throw new NotFoundException();
    }

    return new SerializedGroupApplication(groupApplication);
  }

  @Get()
  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles(ADMIN_ROLE)
  async findAll() {
    const groupApplications = await this.groupApplicationService.findAll();

    return {
      applications: groupApplications
        .map((application) => ({
          ...application,
          user: new SerializedUser(application?.user),
        }))
        .map((application) => new SerializedGroupApplication(application)),
      statusCode: 200,
    };
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles(ADMIN_ROLE)
  async findOneById(@Param('id', ParseIntPipe) id: number) {
    const groupApplication = await this.groupApplicationService.findOneById(id);
    if (!groupApplication) {
      throw new NotFoundException();
    }

    return new SerializedGroupApplication(groupApplication);
  }

  @Post()
  @HttpCode(200)
  async create(
    @Body() createGroupApplicationDto: CreateGroupApplicationDto,
    @Request() req,
  ) {
    const userId = req['user'].id;

    const user = await this.userService.findOneById(userId);
    if (!user) {
      throw new ForbiddenException('User does not exist');
    }

    let groupApplication = user?.groupApplication;
    if (groupApplication) {
      // update
      await this.groupApplicationService.update(
        groupApplication?.id,
        createGroupApplicationDto,
      );
    } else {
      // create
      groupApplication = await this.groupApplicationService.create(
        createGroupApplicationDto,
        userId,
      );
    }

    return {
      id: groupApplication.id,
      statusCode: 200,
    };
  }

  @Put(':id')
  @HttpCode(200)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGroupApplicationDto: UpdateGroupApplicationDto,
    @Request() req,
  ) {
    const userId = req['user'].id;
    const groupApplication = await this.groupApplicationService.findOneById(id);
    const user = groupApplication?.user;

    if (user && user?.id !== userId) {
      throw new ForbiddenException('This user can not update this application');
    }

    const update = await this.groupApplicationService.update(
      id,
      updateGroupApplicationDto,
    );

    return {
      id: id,
      update: update,
      statusCode: 200,
    };
  }

  @Delete(':id')
  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles(ADMIN_ROLE)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.groupApplicationService.delete(id);
  }
}
