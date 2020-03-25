import React, { useContext, useState } from 'react';

import { ModalWindow } from '../ModalWindow';
import { EditCase } from '../../EditCase';
import { ApplicationContext } from '../../Application';

export const ModalEdit = ({ children }) => {
    const cases = useContext(ApplicationContext).listCases;

    const [modalToggle, setModalToggle] = useState(false);
    const [editableCase, setEditableCase] = useState(false);

    const editCase = e => {
        const caseId = parseInt(e.currentTarget.id.replace(/[^.\d]+/g, ''), 10);
        setEditableCase(cases.find(item => item.id === caseId));
        setModalToggle(prevState => !prevState);
    };

    return (
        <div>
            {React.cloneElement(children, { editCase })}
            <ModalWindow visible={modalToggle} setToggle={setModalToggle}>
                <EditCase editableCase={editableCase} />
            </ModalWindow>
        </div>
    );
};
