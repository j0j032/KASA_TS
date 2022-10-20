import React from 'react'
import Map from 'react-map-gl'

const MainMap: React.FC = (): JSX.Element => {

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
                Markers here</Map>
        </section>
    )
}

export default MainMap
