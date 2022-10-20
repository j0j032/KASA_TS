import axios from 'axios'
import {lodging} from "../types";

const API_URL = './data/lodging.json'
const getLodgings = axios.get<Array<lodging>>(API_URL).then((res) => res.data)
export {getLodgings}



