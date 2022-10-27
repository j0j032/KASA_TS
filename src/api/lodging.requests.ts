import axios from 'axios'
import {lodging} from "../types";

const API_URL = './data/lodging.json'
const getLodgings = axios.get<Array<lodging>>(API_URL).then((res) => res.data)

// Filter from api
const getLodgingsById = (id: string | undefined) => getLodgings.then((lodgings) => lodgings.find((item) => item.id === id))

export const fetchLodgings = (filter = '') => axios.get<Array<lodging>>(API_URL).then(res => {
    return filter ? res.data.find((item) => item.title.toLowerCase().includes(filter)) : res.data
})

export {getLodgings, getLodgingsById}



