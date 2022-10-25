import {useQuery} from "react-query";
import {getLodgings} from "../../../api/lodging.requests";
import Modal from "../../components/Modal/Modal";
import {Carrousel} from "./Carrousel/Carrousel";
import {Lodgings} from "../../../types";

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

        <Modal closeModal={closeModal}>
            <article className='lodging-item__container'>
                {lodging !== undefined && (
                    <>
                        <section className='lodging-item__header'>
                            <h1>{lodging.title}</h1>
                            <button onClick={closeModal}>&times;</button>
                        </section>
                        <Carrousel pictures={lodging.pictures} title={lodging.title}/>
                    </>
                )}
            </article>
        </Modal>

    )


}
