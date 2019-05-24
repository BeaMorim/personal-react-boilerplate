import { LOAD_FOO } from './types';
import axios from '../../../utils/axios';

export const loadFoo = () => ({
  type: LOAD_FOO,
  promise: axios.get('/alunos'),
});