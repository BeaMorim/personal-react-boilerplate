import { LOAD_FOO } from './types';
import axios from '../../../utils/axios';
import getQueryParams from '../../../utils/axios/request';

const loadFoo = (params) => ({
  type: LOAD_FOO,
  promise: axios.get(`/alunos${getQueryParams(params)}`),
});

export default {
  loadFoo,
};