import React from 'react'
import {FaStar} from 'react-icons/fa'
import {BsGeoAlt} from 'react-icons/bs'
import {lodging} from "../../types";

const LodgingCard: React.FC<lodging> = ({data}) => {
    const {title, cover, location, beds, square, Guests, price, area, rating} = data
    const bed = beds > 1 ? ' lits' : ' lit'
    const people = Guests > 1 ? ' personnes' : ' personne'
    const areas = area < 21 ? ` ${area}e` : ` ${area}`
    return (
        <article className='card__container'>
            <img className='card__cover' src={cover} alt={title}/>
            <div className='card__heading'>
                <h3 className='card__title'>{title}</h3>
                <div className='card__rating'>
                    <FaStar className='star'/>
                    <p>{rating}</p>
                </div>
            </div>
            <div className='card__location'>
                <BsGeoAlt/>
                <p>{location + areas}</p>
            </div>
            <div className='card__details'>
                <p>{`${beds + bed} - ${square} m² - ${Guests + people}`}</p>
                <h6 className='card__price'>{`${price}€`}</h6>
            </div>
        </article>
    )
}

export default LodgingCard
