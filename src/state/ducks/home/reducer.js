import { LOAD_FOO, CLEAR_FOO } from "./types";
import reducerFactory from '../../reducer/utils/reducerFactory';


export default reducerFactory(LOAD_FOO, CLEAR_FOO);