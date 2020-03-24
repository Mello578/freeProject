import React, { useContext, useEffect, useState } from 'react';

import { ApplicationContext } from '../../Application';
import { ModalWindow } from '../../shared/ModalWindow';
import { EditCase } from '../../EditCase';

import style from './CasesContainer.module.less';
import { Case } from './Case';

export const CasesContainer = () => {
    const cases = useContext(ApplicationContext).listCases;
    const [modalToggle, setModalToggle] = useState(false);
    const [editableCase, setEditableCase] = useState(false);
    useEffect(() => {
        const caseContainerElement = document.querySelector('.js-caseContainer');
        caseContainerElement.addEventListener('mouseup', e => {
            if (e.target.id) {
                setEditableCase(cases.find(item => item.id === parseInt(e.target.id, 10)));
                setModalToggle(prevState => !prevState);
            }
        });
    }, []);

    return (
        <div className={`${style.container} js-caseContainer`}>
            {cases.map((item, key) => (
                <Case key={key} caseInfo={item} />
            ))}
            <ModalWindow visible={modalToggle} setToggle={setModalToggle}>
                <EditCase editableCase={editableCase} />
            </ModalWindow>
        </div>
    );
};
