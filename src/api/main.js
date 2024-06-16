import api from "./api";
import Cookies from "js-cookie";
export const login = async (username, password, recaptcha_token) => {
  return await api().post(`/auth/login`, {
    username,
    password,
    recaptcha_token,
  });
};
export const registration = async (username, password, repeat_password) => {
  return await api().post(`/auth/registration`, {
    username,
    password,
    repeat_password,
  });
};
export const getBooks = async () => {
  const token = Cookies.get("jwt");
  return await api().get(`/books`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const runCode = async (code) => {
  return await api().post('/runtime-code', code)
}