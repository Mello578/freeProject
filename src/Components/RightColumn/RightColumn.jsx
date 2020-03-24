import React from 'react';

import style from './RightColumn.module.less';
import { CaseDescriptionContainer } from './CaseDescriptionContainer';

export const RightColumn = () => {
    return (
        <div className={style.column}>
            <CaseDescriptionContainer />
        </div>
    );
};
