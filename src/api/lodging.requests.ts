import axios from 'axios'
import {lodging} from "../types";

const API_URL = './data/lodging.json'
const getLodgings = axios.get<Array<lodging>>(API_URL).then((res) => res.data)

// Filter from api
const getLodgingsById = (id: string | undefined) => getLodgings.then((lodgings) => lodgings.find((item) => item.id === id))


export {getLodgings, getLodgingsById}



