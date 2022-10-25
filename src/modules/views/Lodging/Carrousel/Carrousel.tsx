import {useState} from "react";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'

type CarrouselProps = {
    pictures: string[],
    title: string
}

export function Carrousel({pictures, title}: CarrouselProps) {

    const [currentPicture, setCurrentPicture] = useState(0)
    const nextPicture = () => currentPicture < pictures.length - 1 ? setCurrentPicture(currentPicture + 1) : setCurrentPicture(0)
    const prevPicture = () => (currentPicture === 0) ? setCurrentPicture(pictures.length - 1) : (setCurrentPicture(currentPicture - 1))

    return (
        <>
            <div className={'carrousel'}>
                <img className={'carrousel__img'} src={pictures[currentPicture]}
                     alt={`${title} n° ${currentPicture + 1}`}/>

                {pictures.length > 1 &&
					<span className={'carrousel__counter'}>{`${currentPicture + 1}/${pictures.length}`}
				</span>}
                {pictures.length > 1 &&
					<span className={'carrousel__arrow--left'} onClick={() => prevPicture()}>
				<BsFillArrowLeftCircleFill/>
				</span>}
                {pictures.length > 1 &&
					<span className={'carrousel__arrow--right'} onClick={() => nextPicture()}>
				<BsFillArrowRightCircleFill/>
				</span>}
            </div>
        </>
    )
}
