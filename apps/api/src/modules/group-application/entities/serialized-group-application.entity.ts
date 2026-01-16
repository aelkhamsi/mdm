import { GroupApplication } from './group-application.entity';

export class SerializedGroupApplication extends GroupApplication {
  constructor(partial: Partial<SerializedGroupApplication>) {
    super(partial);
  }
}
