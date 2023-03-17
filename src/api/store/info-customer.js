import api from "../http-request";
import apiConstants from "../apiConstant";

// [GET METHOD]

export const getInfoCustomerApi = async () =>
  api.get(`${apiConstants.CUSTOMER.INFO_CUSTOMER}`);
export const getDetailTourCustomerApi = async (id) =>
  api.get(`${apiConstants.CUSTOMER.GET_DETAIL_TOUR_CUSTOMER}/${id}`);
export const getListInquiryApi = async () =>
  api.get(`api/customer/inquiry/list`);
export const getListDetailInquiryApi = async (id) =>
  api.get(`api/customer/inquiry/detail/${id}`);
export const getListInquiryMessageApi = async (id) =>
  api.get(`api/customer/inquiry/list/reply/${id}`);

// [GET POST]
export const createInquiryReplyApi = async (id, data) =>
  api.post(`api/customer/inquiry/reply/${id}`, data);
export const createInquiryOnSpaceApi = async (id, data) =>
  api.post(`api/inquiry-space/create/spaceId/${id}`, data);
export const createInquiryApi = async (data) =>
  api.post(`api/inquiry/create`, data);
export const addTourReplyApi = async (data) =>
  api.post(`api/customer/tours/add_reply`, data);
export const cancelStatusTourApi = async (id, data) =>
  api.post(`api/customer/tours/update/status/${id}`, data);
export const updateStatusCustomerApi = async (id, data) =>
  api.put(`api/customer/tours/update/status/${id}`, data);
// [GET UPDATE]

export const updateInfoCustomerApi = async (data) =>
  api.put(`${apiConstants.CUSTOMER.UPDATE_INFO_CUSTOMER}`, data);

export const updateInfoRegisterCustomerApi = async (data) =>
  api.put(`${apiConstants.CUSTOMER.UPDATE_INFO_REGISTERED}`, data);

export const getListTourOfCustomerApi = async () =>
  api.get(`${apiConstants.CUSTOMER.LIST_TOUR_OF_CUSTOMER}`);
export const getListTourReplyApi = async (id) =>
  api.get(`${apiConstants.CUSTOMER.GET_LIST_TOUR_REPLY}/${id}`);
// [PUT METHOD]
export const updateCardInfoCustomerApi = async (data) =>
  api.put(`${apiConstants.CUSTOMER.UPDATE_INFO_CARD_CUSTOMER}`, data);
// [DELETE METHOD]
export const deleteTourCustomerApi = async (id) =>
  api.delete(`api/customer/tours/delete/${id}`);
