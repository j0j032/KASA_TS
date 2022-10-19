import React, {useState} from 'react'
import {useInfiniteQuery, useQuery} from 'react-query'
import {getLodgings} from '../../api/lodging.requests'
import LodgingCard from '../LodgingCard/LodgingCard'
import {loadLodgings} from "../../api/query";

const Gallery = () => {
    const [page, setPage] = useState(1)
    /*const {data: lodgings, isLoading, isError, error} = useQuery(['lodgings'], () => getLodgings)*/

    const {
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

    if (isError) return <p>Error: {error.message}</p>

    return isLoading ? (<p>LOADING</p>) : (
        <>
            <section className='lodgings__gallery'>
                {lodgings.map((lodging) => (
                    <LodgingCard key={lodging.id<String>} data={lodging}/>
                ))}
            </section>
            <button onClick={() => fetchNextPage()} disabled={isLoading || isFetching}>Page Suivante</button>
        </>
    )
}

export default Gallery
