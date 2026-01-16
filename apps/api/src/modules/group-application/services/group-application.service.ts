import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GroupApplication } from '../entities/group-application.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGroupApplicationDto } from '../dto/create-group-application.dto';
import { UserService } from 'src/modules/user/services/user.service';
import { UpdateGroupApplicationDto } from '../dto/update-group-application.dto';

@Injectable()
export class GroupApplicationService {
  constructor(
    private userService: UserService,
    @InjectRepository(GroupApplication)
    private groupApplicationRepository: Repository<GroupApplication>,
  ) {}

  async create(createGroupApplicationDto: CreateGroupApplicationDto, userId: number) {
    // create application
    const groupApplication = await this.groupApplicationRepository.create(
      createGroupApplicationDto,
    );
    await this.groupApplicationRepository.save(groupApplication);

    // update user
    const user = await this.userService.findOneById(userId);
    await this.userService.update(user?.id, { groupApplication });

    groupApplication.user = user;
    return this.groupApplicationRepository.save(groupApplication);
  }

  findAll() {
    return this.groupApplicationRepository
      .createQueryBuilder('application')
      .leftJoinAndSelect('application.user', 'user')
      .getMany();
  }

  findOneById(id: number) {
    return this.groupApplicationRepository
      .createQueryBuilder('application')
      .where('application.id = :id', { id })
      .leftJoinAndSelect('application.user', 'user')
      .getOne();
  }

  findOneByUserId(userId: number) {
    return this.groupApplicationRepository
      .createQueryBuilder('application')
      .where('application.userId = :userId', { userId })
      .leftJoinAndSelect('application.user', 'user')
      .getOne();
  }

  update(id: number, updateGroupApplicationDto: UpdateGroupApplicationDto) {
    return this.groupApplicationRepository.update({ id }, updateGroupApplicationDto);
  }

  delete(id: number) {
    return this.groupApplicationRepository.delete({ id });
  }
}
