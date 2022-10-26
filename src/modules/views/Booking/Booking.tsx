import './Booking.scss'
import {Lodgings} from "../../../types";
import {useQuery} from "react-query";
import {getLodgings} from "../../../api/lodging.requests";
import {useParams} from "react-router-dom";

type BookingProps = {}

export function Booking({}: BookingProps) {

    // on reload page=> refetch initial query???

    const {id} = useParams()
    const findLodging = (arr: Lodgings) => arr?.find((item) => item.id === id)

    const {data: lodging, isLoading, isError, error} = useQuery(['lodgings'], () => getLodgings, {
        select: (lodging) => findLodging(lodging)
    })
    if (isLoading) return <p>LOADING ...</p>
    return (
        <>
            <div>{lodging.title}</div>
            <img src={lodging.cover}/>
        </>
    )
}
