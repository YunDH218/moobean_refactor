import { instance } from "./axiosInstance";

// 로그인
export const login = ({ email, password }) =>
  instance.post('/auth/login', { email, password });

// 로그아웃
export const logout = async () =>
  instance.get('/auth/logout')

// 회원가입
export const register = ({ email, nick, password }) =>
  instance.post('/auth/join', { email, nick, password });

// 이메일 중복 확인
export const emailCheck = ({ email }) =>
  instance.post('/auth/emailCheck', { email });