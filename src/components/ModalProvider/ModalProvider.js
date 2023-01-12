import { createContext, useState } from 'react';

const ModalContext = createContext();

function ModalProvider({ children }) {
    const [active, setActive] = useState('');
    const handleShowModal = () => {
        setActive('active');
    };
    const handleHideModal = () => {
        setActive('');
    };

    const data = { active, handleShowModal, handleHideModal };
    
    return (
        <ModalContext.Provider value={data}>{children}</ModalContext.Provider>
    );
}

export { ModalContext, ModalProvider };
