import React, { useContext, useState } from 'react';

import { ApplicationContext } from '../Application';
import { TextInputField } from '../shared/TextInputField';
import { Case } from '../Application/utils/modelCases';

import style from './EditCase.module.less';

export const EditCase = ({ editableCase }) => {
    const [caseInfo, setCaseInfo] = useState(editableCase);
    const { listCases, setListCases } = useContext(ApplicationContext);

    const changeTitle = title =>
        setCaseInfo(prevState => {
            return { ...prevState, title };
        });
    const changeDescription = description =>
        setCaseInfo(prevState => {
            return { ...prevState, description };
        });

    const changeCases = () => {
        //хрень, чтоб сохранялся порядок и не происходило мутирование внутри сонтекста
        const allCase = [...listCases];
        const editedCase = allCase.find(item => item.id === caseInfo.id);
        Object.assign(editedCase, caseInfo);
        setListCases(allCase);
        setCaseInfo(new Case());
    };

    return (
        <div className={style.container}>
            <h1>Редактирование записи</h1>
            <TextInputField startValue={editableCase.title} changeEvent={changeTitle}>
                <div>
                    <input type="text" name="title" />
                </div>
            </TextInputField>
            <TextInputField startValue={editableCase.description} changeEvent={changeDescription}>
                <div>
                    <textarea name="description" cols="30" rows="10" />
                </div>
            </TextInputField>
        </div>
    );
};
