import React, { useContext, useState } from 'react';

import { ApplicationContext } from '../../Application';
import { TextInputField } from '../../shared/TextInputField';
import { Case } from '../../Application/utils/modelCases';

import style from './FieldCreate.module.less';

export const FieldCreate = () => {
    const [inputValue, setValue] = useState('');
    const { listCases, setListCases } = useContext(ApplicationContext);

    const changeCases = () => {
        setListCases([...listCases, new Case(inputValue.length, inputValue)]);
        setValue('');
    };

    return (
        <div className={style.container}>
            <TextInputField value={inputValue} changeEvent={setValue}>
                <input className={style.inputField} />
            </TextInputField>
            <button className={style.button} disabled={!inputValue.length} onClick={changeCases}>
                Создать
            </button>
        </div>
    );
};
