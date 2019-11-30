import { UserProfile } from './../types/User';
export interface LogData {
  username: string;
  password: string;
}
export function authCheck(user: UserProfile, logData: LogData) {
  const { username, password } = user;
  return username === logData.username && password === logData.password;
}
