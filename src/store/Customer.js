import { defineStore } from "pinia";
import { getDetailTourCustomerApi } from "@/client/api";

const useCustomer = defineStore("customer", {
  state: () => ({
    tourDetail: {},
    isLoading: false,
    reservationRequest: {
      spaceId: "",
      planName: "",
      maximumCapacity: "",
      minimumCapacity: "",
      totalPrice: "",
      timeStart: "",
      timeEnd: "",
      dateSelect: "",
      detailYear: "",
      detailMonth: "",
      detailDay: "",
      nameSpace: "",
    },
  }),
  getters: {
    getTourDetail: (state) => state.tourDetail,
  },
  actions: {
    async fetchTourDetail(id) {
      const { data } = await getDetailTourCustomerApi(id);
      this.tourDetail = data;
    },
  },
});
export default useCustomer;
