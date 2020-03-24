import React from 'react';

import style from './ModalWindow.module.less';

export const ModalWindow = ({ visible, setToggle, children }) => {
    const closeModal = e => {
        e.stopPropagation();
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
                        {children}
                        <div className={style.buttonContainer}>
                            <button className={`${style.buttons} ${style.delete}`}>Удалить</button>
                            <button className={`${style.buttons} ${style.cancel}`} onClick={closeModal}>
                                Отмена
                            </button>
                            <button className={`${style.buttons} ${style.add}`}>Добавить</button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};
