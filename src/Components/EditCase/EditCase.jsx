import React, { useContext, useState } from 'react';

import { ApplicationContext } from '../Application';
import { TextInputField } from '../shared/TextInputField';
import { Case } from '../Application/utils/modelCases';
import { mutableContext } from '../../utils';

import style from './EditCase.module.less';
import { updateCase } from './utils/updateCase';
import { deleteCase } from './utils/deleteCase';

export const EditCase = ({ editableCase, closeModal }) => {
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
        setListCases(mutableContext(listCases, updateCase, caseInfo));
        setCaseInfo(new Case());
    };

    const onEdit = () => {
        changeCases();
        closeModal();
    };

    const onDelete = () => {
        setListCases(mutableContext(listCases, deleteCase, caseInfo));
        closeModal();
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
            <div className={style.buttonContainer}>
                <button className={`${style.buttons} ${style.delete}`} onClick={onDelete}>
                    Удалить
                </button>
                <button className={`${style.buttons} ${style.cancel}`} onClick={closeModal}>
                    Отмена
                </button>
                <button className={`${style.buttons} ${style.edit}`} onClick={onEdit}>
                    Изменить
                </button>
            </div>
        </div>
    );
};
