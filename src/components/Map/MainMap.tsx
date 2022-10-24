import React from 'react'
import Map, {Marker} from 'react-map-gl'
import {Lodgings} from "../../types";


const MainMap = ({lodgings}: { lodgings: Lodgings }) => {
    console.log(lodgings)
    return (
        <section className='map__container'>
            <Map
                mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
                initialViewState={{
                    longitude: 2.335,
                    latitude: 48.8588897,
                    zoom: 11
                }}
                style={{width: '100%', height: '100%'}}
                mapStyle='mapbox://styles/j0j032/cl9gyr4ep008x15pu513jnsu4/draft'
            >
                {lodgings?.map(({coordinates, id}) => (
                    <Marker key={id} longitude={coordinates[1]} latitude={coordinates[0]}>
                        <div className='map__pin'>⌂</div>
                    </Marker>
                ))}

            </Map>
        </section>
    )
}

export default MainMap
