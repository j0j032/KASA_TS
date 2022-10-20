import React from 'react'
import {useQuery} from 'react-query'
import {getLodgings} from '../../api/lodging.requests'
import LodgingCard from '../LodgingCard/LodgingCard'
import {AxiosError} from "axios";
import {lodging} from "../../types";

const Gallery: React.FC = (): JSX.Element => {
    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery<Array<lodging>, AxiosError>(['lodgings'], () => getLodgings, {
        staleTime: 100_000,
        retry: false
    })

    const gallery = <section className='lodgings__gallery'>
        {data?.map((lodging) => (
            <LodgingCard key={lodging.id} data={lodging}/>
        ))}
    </section>

    if (isError) return <p>Error: {error.message}</p>

    return isLoading ? (<p>LOADING</p>) : (gallery)
}

export default Gallery
