type ModalProps = {
    children: JSX.Element
}

const Modal = ({children}: ModalProps) => {

    return (
        <>
            <div className='modal__bg'>
                <div className='modal__container'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal
