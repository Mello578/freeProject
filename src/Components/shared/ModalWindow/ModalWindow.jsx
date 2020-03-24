import React from 'react';

import style from './ModalWindow.module.less';

export const ModalWindow = ({ visible, setToggle, children }) => {
    return (
        <>
            {visible ? (
                <div className={style.wrapper} onClick={() => setToggle(false)}>
                    <div className={style.modal}>
                        {children}
                        <div className={style.buttonContainer}>
                            <button className={`${style.buttons} ${style.delete}`}>Удалить</button>
                            <button className={`${style.buttons} ${style.cancel}`} onClick={() => setToggle(false)}>
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
