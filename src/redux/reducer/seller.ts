import mockupDataDiscount from "../../data/mockupDataDiscount";
type Action = {
  type: string;
  number: number;
  name: string;
  address: string;
  phoneNumber: string;
  id: number;
};
export const mockupDataSeller = (
  state = mockupDataDiscount,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
