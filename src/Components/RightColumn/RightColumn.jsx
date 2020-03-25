import React from 'react';

import { ModalEdit } from '../shared/ModalEdit';

import style from './RightColumn.module.less';
import { CaseDescriptionContainer } from './CaseDescriptionContainer';

export const RightColumn = () => {
    return (
        <div className={style.column}>
            <ModalEdit>
                <CaseDescriptionContainer />
            </ModalEdit>
        </div>
    );
};
