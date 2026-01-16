import { User } from 'src/modules/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export type GroupApplicationStatus =
  | 'DRAFT'
  | 'COMPLETE';

@Entity({ name: 'group_applications' })
export class GroupApplication {
  constructor(partial: Partial<GroupApplication>) {
    Object.assign(this, partial);
  }

  /* Personal Informations */
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.groupApplication)
  @JoinColumn()
  user: User;

  @Column({ type: 'varchar', default: '' })
  firstName: string;

  @Column({ type: 'varchar', default: '' })
  lastName: string;

  @Column({ type: 'timestamp', nullable: true })
  dateOfBirth: Date;

  @Column({ type: 'varchar', default: '' })
  identityCardNumber: string;

  @Column({ type: 'varchar', default: '' })
  city: string;

  @Column({ type: 'varchar', default: '' })
  region: string;

  @Column({ type: 'varchar', default: '' })
  phoneNumber: string;

  /* Uploads */
  // @Column({ type: 'varchar', nullable: true })
  // fileCnieUrl: string;

  // @Column({ type: 'varchar', nullable: true })
  // fileMembersCnieUrl: string;

  // @Column({ type: 'varchar', nullable: true })
  // fileGradesUrl: string;

  // @Column({ type: 'varchar', nullable: true })
  // fileParentalAuthorizationUrl: string;

  /* Status */
  @Column({ type: 'varchar', default: 'DRAFT'})
  status: GroupApplicationStatus;

  /* createAt & updatedAt */
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
