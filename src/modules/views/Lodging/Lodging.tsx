import './Lodging.scss'
import {useQuery} from "react-query";
import {getLodgings} from "../../../api/lodging.requests";
import Modal from "../../components/Modal/Modal";
import {Carrousel} from "./Carrousel/Carrousel";
import {lodging, Lodgings} from "../../../types";

type LodgingProps = {
    id: string,
    closeModal: () => void,
}

export function Lodging({id, closeModal}: LodgingProps) {

    const findLodging = (arr: Lodgings) => arr?.find((item) => item.id === id)

    const {data: lodging, isLoading, isError, error} = useQuery(['lodgings'], () => getLodgings, {
        select: (lodging) => findLodging(lodging)
    })

    if (isLoading) return <p>LOADING ...</p>
    return (

        <Modal>
            <article>
                <button onClick={closeModal}>X</button>
                {lodging !== undefined && (
                    <>
                        <h1>{lodging.title}</h1>
                        <Carrousel pictures={lodging.pictures} title={lodging.title}/>
                    </>
                )}
            </article>
        </Modal>

    )


}
