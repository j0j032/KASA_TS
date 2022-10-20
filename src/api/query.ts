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
    params.set('page', String(page))
    if (fields) {
        params.set('fields', fields.join(','))
    }
    return api.get('lodging.json?' + params.toString()).then((r) => r.data)
}

// Associate code for infinite scroll
/*const {
		data,
		isLoading,
		isError,
		error,
		isFetching,
		fetchNextPage
	} = useInfiniteQuery(['lodgings'], ({pageParam}) => loadLodgings(pageParam),
		{
			staleTime: 60_000,
			getNextPageParam: (lastPage, allPages) => allPages.length + 1
		})
	console.log(data)
	const lodgings = data?.pages?.flat() || []
	console.log(lodgings)
*/
