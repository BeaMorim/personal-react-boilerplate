const requestHandler = async resquest => {
  if (localStorage.getItem("authorization")) {
    resquest.headers = {
      ...resquest.headers,
      Authorization: localStorage.getItem("authorization")
    };
  }
  return resquest;
};

const requestErrorHandler = error => Promise.reject(error);

const responseHandler = async response => response;

const responseErrorHandler = error => {
  // Default error handlers
  return Promise.reject(error);
};

export { requestHandler, requestErrorHandler, responseHandler, responseErrorHandler };
