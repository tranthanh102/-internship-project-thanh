import { combineReducers } from "redux";
import { mockupDataCategory } from "redux/reducer/category";
import { mockupDataSeller } from "redux/reducer/seller";
export const RootReducer = combineReducers({
  mockupDataCategory,
  mockupDataSeller,
});
