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
        <div>
            <h1>Редактирование записи</h1>
            <div className={style.editContainer}>
                <div className={style.editFieldContainer}>
                    <label htmlFor="title">Редактировать заголовок</label>
                    <TextInputField value={caseInfo.title} changeEvent={changeTitle}>
                        <input className={style.editLabel} type="text" name="title" />
                    </TextInputField>
                </div>
                <div className={style.editFieldContainer}>
                    <label htmlFor="title">Редактировать описание</label>
                    <TextInputField value={caseInfo.description} changeEvent={changeDescription}>
                        <textarea className={style.editDescription} name="description" />
                    </TextInputField>
                </div>
            </div>
        </div>
    );
};
