import { combineReducers } from "redux";
import { mockupDataCategory } from "redux/reducer/category";
import { mockupDataSeller } from "redux/reducer/seller";
import { mockupDataSelling } from "redux/reducer/selling";
import { mockupDataHots } from "redux/reducer/hot";
import todoUser from "redux/reducer/signUpReducer";
export const RootReducer = combineReducers({
  mockupDataCategory,
  mockupDataSeller,
  mockupDataSelling,
  mockupDataHots,
  todoUser,
});
