export const ROUTER_PATH = {
  //ROUTER_CUSTOMER
  HOME: "/",
  LOGIN: "/customer/login",
  REGISTERED: "/customer/registered",
  UPDATE_INFO: "/customer/registered/update-info",
  REGISTERED_SUCCESS: "/customer/registered-success",
  REGISTER: "/customer/register",
  RECOVERY_REQUEST: "/customer/recovery-request",
  USE_GUIDE: "/customer/use-guide",
  SPECIFIED_COMMERCIAL: "/customer/specified-commercial",
  MEMBER_AGREEMENT: "/customer/member-agreement",
  APPLY: "/customer/apply",
  MY_PAGES: "/pages",
  DETAIL: "/detail",
  PANORAMA: "/panorama",
  RESERVATIONS: "reservations",
  TOUR_REQUEST: "tour-request",
  TOUR_REQUEST_DETAIL: "tour-request/:id",
  OBSERVATION_DETAIL: "space/tour/view",
  INQUIRY: "inquiry",
  INQUIRY_DETAIL: "inquiry/:id",
  PROFILE: "profile",
  CREDIT_CARD: "credit-card",
  RESERVATIONS_DETAIL: "reservations/view",
  CUSTOMER_PAYMENT: "customer-payment",
  SPACE_BOOKING_CALENDAR: "/space-booking-calendar",
  CONTENT_LOCATION_SPACE: "/contents/location",
  CONTENT_CASE: "/contents/case",
  SPACE_TOUR: "/space/tours",
  RESEARCH_SPACE: "/search-space",
  RESEARCH_SPACE_LOCATION: "/search-space-location",
  CONTACT_IQUIRIES: "/inquiries",
  RESERVATIONS_REQUEST_INPUT: "/reservations-request-input",
  RESERVATIONS_REQUEST_CONFIRM: "/reservations-request-confirm",
  CONTENT_CATEGORY: "/content/case/category",
  CONTENT_CASE_HEADER: "/contents/case/header",
  CAMPAIGN_DISCOUNT: "/campaign/discount",
  CONTENT_LOCATION_HEADER: "/content/location/header",
  UN_DESCRIPTION: "leave",

  MEMBER_AGREEMENT_CUSTOMER: "/customer/member-agreement-customer",
  NEWS_DETAIL: "/news/detail",
  NEWS_LIST: "/news/list",
};

export const STATUS_CODE = {
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  TooManyRequests: 429,
  ValidationFailed: 422,
  InternalServerError: 500,
};
export const TYPE_USER = {
  USER: "user",
  ADMIN: "admin",
};
export const PROFILE_FIELD_REQUIRED = [
  "business_structure",
  "company_name",
  "first_name",
  "last_name",
  "first_name_kana",
  "last_name_kana",
  "gender",
  "year",
  "month",
  "day",
  "phone_number",
  "address",
];

export const ROUTE_NAME = {
  CUSTOMER: {
    HOME: "home-timesharing",
    CONTENT_CASE: "CustomerContentCase",
    TOUR_REQUEST: "tour-request",
    TOUR_REQUEST_DETAIL: "tour-request-detail",
    INQUIRY: "inquiry",
    INQUIRY_DETAIL: "inquiry-detail",
    LOGIN: "customer-login",
    REGISTER: "customer-register",
    RECOVERY_REQUEST: "customer-recovery-request",
    MY_PAGE: "customer-my-page",
    RESERVATIONS: "customer-reservation",
    SPACE_TOUR: "customer-space-tour",
    SPACE_BOOKING_CALENDAR: "customer-space-calendar",
    SPACE_DETAIL: "customer-space-detail",
    SPACE_PANORAMA: "customer-space-detail-panorama",
    RESERVATION_REQUEST_INFO: "customer-reservation-request-info",
    CREDIT_PRE_RESERVED: "customer-credit-pre-reserved",
    RESERVATIONS_REQUEST_INPUT: "customer-reservation-request",
    CONTENT_LOCATION_HEADER: "customer-content-header",
    CONTENT_CASE_LIST: "content_case_list",
    CONTENT_CASE_FILTER_LOCATION_LIST: "content_case_filter_location_list",
    CONTENT_CASE_DETAIL_SPACE_LIST: "content_case_detail_space_list",
    CUSTOMER_CHOOSE_PAYMENT_METHOD: "customer_choose_payment_method",
    PROFILE: "customer-update-profile",
  },
};

export const NESTED_ROUTE = {
  "tour-request": [ROUTE_NAME.CUSTOMER.TOUR_REQUEST_DETAIL],
  inquiry: [ROUTE_NAME.CUSTOMER.INQUIRY_DETAIL],
};
