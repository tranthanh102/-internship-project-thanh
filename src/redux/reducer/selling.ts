import mockupDataBestSeller from "../../data/mockupDataBestSeller";
type Action = {
  type: string;
  number: number;
  name: string;
  address: string;
  phoneNumber: string;
  id: number;
};
export const mockupDataSelling = (
  state = mockupDataBestSeller,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
