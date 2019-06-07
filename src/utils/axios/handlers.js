/**
 * Handler that runs before request is done
 * @param {Object} resquest Request object
 */
const requestHandler = async resquest => {
  if (localStorage.getItem("authorization")) {
    resquest.headers = {
      ...resquest.headers,
      Authorization: localStorage.getItem("authorization")
    };
  }
  return resquest;
};

/**
 * Handler that runs before request is done and if some error occurs
 * @param {Object} error Request error object
 */
const requestErrorHandler = error => Promise.reject(error);


/**
 * Handler that runs when response is received
 * @param {Object} response API response
 */
const responseHandler = async response => response;

/**
 * Handler that runs when an error is returned from API
 * @param {Object} error API response error
 */
const responseErrorHandler = error => {
  // Default error handlers
  return Promise.reject(error);
};

export { requestHandler, requestErrorHandler, responseHandler, responseErrorHandler };
