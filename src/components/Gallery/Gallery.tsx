import {Lodgings} from "../../types";
import {LodgingCard} from "../LodgingCard/LodgingCard";
import React from "react";

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
