import React from 'react';

import style from './Case.module.less';

export const Case = ({ currentCase }) => {
    return (
        <div className={style.case}>
            <span>{currentCase}</span>
        </div>
    );
};
