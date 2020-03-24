import React, { useEffect } from 'react';

import style from './Case.module.less';

export const Case = ({ caseInfo }) => {
    useEffect(() => {}, [caseInfo.id]);

    return (
        <div className={style.case} id={caseInfo.id}>
            <span>{caseInfo.title}</span>
        </div>
    );
};
