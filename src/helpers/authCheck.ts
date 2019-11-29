import { UserProfile } from './../types/User';
export interface LogData {
  login: string;
  password: string;
}
export function authCheck(user: UserProfile, logData: LogData) {
  const { username, password } = user;
  return username === logData.login && password === logData.password;
}
