import axios from "axios";

export const BASE_URL = 'http://3.37.197.58';

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});