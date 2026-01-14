import { Injectable } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { Application } from '../entities/application.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateApplicationDto } from '../dto/create-application.dto';
import { UserService } from 'src/modules/user/services/user.service';
import { UpdateApplicationDto } from '../dto/update-application.dto';

@Injectable()
export class ApplicationService {
  constructor(
    private userService: UserService,
    @InjectRepository(Application)
    private applicationRepository: Repository<Application>,
  ) {}

  async create(createApplicationDto: CreateApplicationDto, userId: number) {
    // create application
    const application = await this.applicationRepository.create(
      createApplicationDto,
    );
    await this.applicationRepository.save(application);

    // update user
    const user = await this.userService.findOneById(userId);
    await this.userService.update(user?.id, { application });

    application.user = user;
    return this.applicationRepository.save(application);
  }

  findAll() {
    return this.applicationRepository
      .createQueryBuilder('application')
      .leftJoinAndSelect('application.user', 'user')
      .getMany();
  }

  findOneById(id: number) {
    return this.applicationRepository
      .createQueryBuilder('application')
      .where('application.id = :id', { id })
      .leftJoinAndSelect('application.user', 'user')
      .getOne();
  }

  findOneByUserId(userId: number) {
    return this.applicationRepository
      .createQueryBuilder('application')
      .where('application.userId = :userId', { userId })
      .leftJoinAndSelect('application.user', 'user')
      .getOne();
  }

  update(id: number, updateApplicationDto: UpdateApplicationDto) {
    return this.applicationRepository.update({ id }, updateApplicationDto);
  }

  delete(id: number) {
    return this.applicationRepository.delete({ id });
  }
}
