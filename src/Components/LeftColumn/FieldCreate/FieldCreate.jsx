import React, { useContext, useState } from 'react';

import { ApplicationContext } from '../../Application';

import style from './FieldCreate.module.less';

export const FieldCreate = () => {
    const [inputValue, setValue] = useState('');
    const { listCases, setListCases } = useContext(ApplicationContext);

    const onChange = e => {
        setValue(e.target.value);
    };

    const changeCases = () => {
        setListCases([...listCases, inputValue]);
        setValue('');
    };

    return (
        <div className={style.container}>
            <input className={style.inputField} onChange={onChange} value={inputValue} />
            <button className={style.button} disabled={!inputValue.length} onClick={changeCases}>
                Создать
            </button>
        </div>
    );
};
