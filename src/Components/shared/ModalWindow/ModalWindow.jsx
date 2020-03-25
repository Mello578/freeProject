import React from 'react';

import style from './ModalWindow.module.less';

export const ModalWindow = ({ visible, setToggle, children }) => {
    const closeModal = () => {
        setToggle(false);
    };

    const stopBubbling = e => {
        e.stopPropagation();
    };

    return (
        <>
            {visible ? (
                <div className={style.wrapper} onClick={closeModal}>
                    <div className={style.modal} onClick={stopBubbling}>
                        <div className={style.close} onClick={closeModal}>
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="12" />
                                <polygon
                                    className={style.polygon}
                                    points="17.8,16.7 16.6,17.9 12,13.3 7.4,17.9 6.2,16.7 10.8,12.1 6.2,7.5 7.4,6.3 12,11 16.6,6.4 17.8,7.6 13.2,12.2 "
                                />
                            </svg>
                        </div>
                        {React.cloneElement(children, { closeModal })}
                    </div>
                </div>
            ) : null}
        </>
    );
};
