import { CreateUserDto } from './createUser.dto';

export interface CreateFatherDto extends CreateUserDto {
  job: string;
  smoke: boolean;
}
