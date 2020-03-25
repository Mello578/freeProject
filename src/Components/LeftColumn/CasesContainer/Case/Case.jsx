import React from 'react';

import { stopBubbling } from '../../../../utils';

import style from './Case.module.less';

export const Case = ({ caseInfo, editCase }) => {
    return (
        <div onClick={stopBubbling}>
            <div className={`${style.case} js-caseTitle`} id={`case-${caseInfo.id}`} onClick={editCase}>
                <span>{caseInfo.title}</span>
            </div>
        </div>
    );
};
