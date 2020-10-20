const initUser = {
  userName: "",
};
const todoUser = (state = initUser, action) => {
  switch (action.type) {
    case "DANG_NHAP":
      return {
        ...state,
        userName: action.payload,
      };
      case "LOG_OUT":
        return {
        initUser,
        }
    default:
      return state;
  }

};
export default todoUser;
