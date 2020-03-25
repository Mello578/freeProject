import React, { useContext, useEffect, useState } from 'react';

import { ModalWindow } from '../../../shared/ModalWindow';
import { EditCase } from '../../../EditCase';
import { ApplicationContext } from '../../../Application';

import style from './Case.module.less';

export const Case = ({ caseInfo }) => {
    const cases = useContext(ApplicationContext).listCases;
    const [modalToggle, setModalToggle] = useState(false);
    const [editableCase, setEditableCase] = useState(false);
    const idSelector = `case-${caseInfo.id}`;
    useEffect(() => {
        const caseTitleElement = document.querySelector(`#${idSelector}`);
        caseTitleElement.addEventListener('mouseup', () => {
            setEditableCase(cases.find(item => item.id === caseInfo.id));
            setModalToggle(prevState => !prevState);
        });
    }, []);
    return (
        <>
            <div className={`${style.case} js-caseTitle`} id={idSelector}>
                <span>{caseInfo.title}</span>
            </div>
            <ModalWindow visible={modalToggle} setToggle={setModalToggle}>
                <EditCase editableCase={editableCase} />
            </ModalWindow>
        </>
    );
};
