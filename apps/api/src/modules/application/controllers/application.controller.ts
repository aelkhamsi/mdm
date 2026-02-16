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
import { ApplicationService } from '../services/application.service';
import { SerializedApplication } from '../entities/serialized-application.entity';
import { CreateApplicationDto } from '../dto/create-application.dto';
import { UpdateApplicationDto } from '../dto/update-application.dto';
import { RolesGuard } from 'src/guards/roles.guard';
import { ADMIN_ROLE } from 'src/constants';
import { Roles } from 'src/decorators/roles.decorator';
import { UserService } from 'src/modules/user/services/user.service';
import { SerializedUser } from 'src/modules/user/entities/serialized-user';

@Controller('mdm-api/applications')
export class ApplicationController {
  constructor(
    private readonly applicationService: ApplicationService,
    private readonly userService: UserService,
  ) {}

  @Get('user/:id')
  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles(ADMIN_ROLE)
  async findByUserId(@Param('id', ParseIntPipe) id: number) {
    const application = await this.applicationService.findOneByUserId(+id);
    if (!application) {
      throw new NotFoundException();
    }

    return new SerializedApplication(application);
  }

  @Get()
  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles(ADMIN_ROLE)
  async findAll() {
    const applications = await this.applicationService.findAll();

    return {
      applications: applications
        .map((application) => ({
          ...application,
          user: new SerializedUser(application?.user),
        }))
        .map((application) => new SerializedApplication(application)),
      statusCode: 200,
    };
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles(ADMIN_ROLE)
  async findOneById(@Param('id', ParseIntPipe) id: number) {
    const application = await this.applicationService.findOneById(id);
    if (!application) {
      throw new NotFoundException();
    }

    return new SerializedApplication(application);
  }

  @Post()
  @HttpCode(200)
  async create(
    @Body() createApplicationDto: CreateApplicationDto,
    @Request() req,
  ) {
    const userId = req['user'].id;

    const user = await this.userService.findOneById(userId);
    if (!user) {
      throw new ForbiddenException('User does not exist');
    }

    let application = user?.application;
    if (application) {
      // update
      await this.applicationService.update(
        application?.id,
        createApplicationDto,
      );
    } else {
      // create
      application = await this.applicationService.create(
        createApplicationDto,
        userId,
      );
    }

    return {
      id: application.id,
      statusCode: 200,
    };
  }

  @Put(':id')
  @HttpCode(200)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateApplicationDto: UpdateApplicationDto,
    @Request() req,
  ) {
    const user = req['user'];
    const application = await this.applicationService.findOneById(id);
    const applicationUser = application?.user;

    if (
      applicationUser &&
      user?.role !== ADMIN_ROLE &&
      user?.id !== applicationUser?.id
    ) {
      throw new ForbiddenException('This user can not update this application');
    }

    const update = await this.applicationService.update(
      id,
      updateApplicationDto,
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
    return this.applicationService.delete(id);
  }
}
