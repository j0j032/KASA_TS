import axios from 'axios'

const api = axios.create({
    baseURL: './data/',
    timeout: 5000,
    headers: {
        Authorization: `Bearer secret`,
    }
})

export function loadLodgings(
    page = 1,
    fields = ['id', 'title']
) {
    const params = new URLSearchParams()
    params.set('limit', '10')
    params.set('page', page)
    if (fields) {
        params.set('fields', fields.join(','))
    }
    return api.get('lodging.json?' + params.toString()).then((r) => r.data)
}
