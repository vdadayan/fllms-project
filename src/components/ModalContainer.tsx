import React, {FC} from 'react';
import Modal from 'react-modal';

type ModalContainerType = {
    closeModal: () => void,
    modalIsOpen: boolean,
    title: string
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ModalContainer: FC<ModalContainerType> = ({closeModal, modalIsOpen, children, title}) => {
    return (
        <div>
            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={closeModal} ariaHideApp={false}>
                <h2>{title}</h2>
                <button className={'close-modal'} onClick={closeModal}>X</button>
                {children}
            </Modal>

        </div>
    );
};

export default ModalContainer;
