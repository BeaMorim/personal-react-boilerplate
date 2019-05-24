export const DEFAULT_TIMEOUT = 240000;

export const API_URL =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === "development"
    ? "https://private-7d28c-educar2.apiary-mock.com"
    : `${window.location.origin}/api`;
