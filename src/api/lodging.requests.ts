import axios from 'axios'

const API_URL = './data/lodging.json'
const getLodgings = axios.get<Array<Object>>(API_URL).then((res) => res.data)
export {getLodgings}



