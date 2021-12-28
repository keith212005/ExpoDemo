import { REDUCER_TYPE } from "@constants";

export const saveUserInfo = (params: any) => {
  console.log("params>>>>", params);

  return {
    type: REDUCER_TYPE.SAVE_USER_INFO,
    data: params,
  };
};
