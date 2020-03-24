import React from 'react';

import style from './LeftColumn.module.less';
import { FieldCreate } from './FieldCreate';
import { CasesContainer } from './CasesContainer';

export const LeftColumn = () => {
    return (
        <div className={style.column}>
            <span className={style.label}>Записатор</span>
            <FieldCreate />
            <CasesContainer />
        </div>
    );
};
