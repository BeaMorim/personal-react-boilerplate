export const DEFAULT_TIMEOUT = 240000;

export const API_URL =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === "development"
    ? "http://172.16.32.20:8080/api"
    : `${window.location.origin}/api`;
