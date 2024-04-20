import { api } from '@/src/shared/utils/http/fetchRequest';

export interface UserRegustrationRequest {
  email: string;
  password: string;
  username: string;
}

export type UserRegustrationRequestConfig = FetchRequestConfig<UserRegustrationRequest>;
export const userRegustration = async ({ params, config }: UserRegustrationRequestConfig) =>
  api.post('/api/registration', params, config);
