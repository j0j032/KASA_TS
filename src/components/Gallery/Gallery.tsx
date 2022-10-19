import React from 'react'
import {useQuery} from 'react-query'
import {getLodgings} from '../../api/lodging.requests'
import LodgingCard from '../LodgingCard/LodgingCard'

const Gallery = () => {

    const {data: lodgings, isLoading} = useQuery(['lodgings'], () => getLodgings)

    return isLoading ? (<p>LOADING</p>) : (
        <section className='lodgings__gallery'>
            {lodgings.map((lodging) => (
                <LodgingCard key={lodging.id<String>} data={lodging}/>
            ))}
        </section>
    )
}

export default Gallery
