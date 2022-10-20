import React, {useState} from 'react'
import Map from 'react-map-gl'

const MainMap: React.FC = (): JSX.Element => {

    return (
        <section className='map__container'>
            <Map
                mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
                initialViewState={{
                    longitude: 2.320041,
                    latitude: 48.8588897,
                    zoom: 11
                }}
                style={{width: '100%', height: '100%'}}
                mapStyle='mapbox://styles/mapbox/streets-v9'
            >
                Markers here</Map>
        </section>
    )
}

export default MainMap
