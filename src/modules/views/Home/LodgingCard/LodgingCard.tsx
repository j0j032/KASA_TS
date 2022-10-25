import {lodging} from "../../../../types"
import {FaStar} from "react-icons/fa";
import {BsGeoAlt} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {Lodging} from "../../Lodging/Lodging";
import useBoolean from "../../../../hooks/useBoolean";
import {useMemo} from "react";

type LodgingCardProps = {
    lodging: lodging
}

export function LodgingCard({lodging}: LodgingCardProps) {

    const {title, cover, location, beds, square, Guests, price, area, rating, id} = lodging
    const {value: modal, setTrue: openModal, setFalse: closeModal} = useBoolean(false)

    const bed = beds > 1 ? ' lits' : ' lit'
    const people = Guests > 1 ? ' personnes' : ' personne'
    const areas = area < 21 ? ` ${area}e` : ` ${area}`

    const lodgingModal = useMemo(() => (modal && <Lodging id={id} closeModal={closeModal}/>), [modal])

    return (
        <>
            <article onClick={() => openModal()} className='card__container'>
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
            {lodgingModal}
        </>
    )
}
