import './Gallery.scss'
import {Lodgings} from "../../../../types";
import {LodgingCard} from "../LodgingCard/LodgingCard";

type GalleryProps = {
    lodgings: Lodgings
}

export function Gallery({lodgings}: GalleryProps) {

    return (
        <>
            <section className='lodgings__gallery'>
                {lodgings?.map((lodging) => (
                    <LodgingCard key={lodging.id} lodging={lodging}/>
                ))}
            </section>
        </>
    )
}
