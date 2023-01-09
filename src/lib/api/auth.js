import client from "./client";

// 로그인
export const login = ({ email, password }) =>
  client.post('/auth/login', { email, password });

// 회원가입
export const register = ({ email, nick, password }) =>
  client.post('/auth/join', { email, nick, password })

// TODO: 로그인 상태 확인