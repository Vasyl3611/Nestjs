import { UserType } from './user.type';

export interface UserResponseIntrerface {
  user: UserType & { token: string };
}
