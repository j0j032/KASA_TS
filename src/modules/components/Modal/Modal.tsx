type ModalProps = {
    children: JSX.Element,
    closeModal: () => void
}

const Modal = ({children, closeModal}: ModalProps) => {

    return (
        <>
            <div onClick={closeModal} className='modal__bg'>
                <div onClick={(e) => e.stopPropagation()} className='modal__container'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal
