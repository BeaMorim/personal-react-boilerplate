import { isEmpty } from 'lodash';

const getQueryParams = params => {
  if (isEmpty(params)) { return ""; }

  const queryString = new URLSearchParams();

  Object.keys(params).forEach(key => {
    const item = params[key].toString();

    if (!isEmpty(item)) { queryString.append(key, params[key]); }
  });

  return `?${queryString.toString()}`;
};

export default getQueryParams;
