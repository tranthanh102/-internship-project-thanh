import { bindActionCreators } from "redux";
import mockupDataHot from "../../data/mockupDataHot";
type Action = {
  type: string;
  number: number;
  name: string;
  address: string;
  phoneNumber: string;
  id: number;
};
export const mockupDataHots = (state = mockupDataHot, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
