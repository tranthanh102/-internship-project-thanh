export const Login = (username) => {
  return {
    type: "DANG_NHAP",
    payload: username,
  };
};
export const Logout = (username) => {
  return {
    type: "LOG_OUT",
  }
}
