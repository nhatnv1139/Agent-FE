import api from "../http-request";
import apiConstants from "../apiConstant";

// [POST METHOD]
export const createCustomer = async (data) =>
  api.post(apiConstants.CUSTOMER.REGISTER, data);
export const loginCustomer = async (data) =>
  api.post(apiConstants.CUSTOMER.LOGIN, data);
export const resetPassWordUser = async (email) =>
  api.put(`${apiConstants.CUSTOMER.RECOVERY}/${email}`);
