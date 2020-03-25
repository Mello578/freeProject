import React from 'react';

import { stopBubbling } from '../../../../utils';

import style from './Case.module.less';

export const Case = React.memo(({ id, title, editCase }) => {
    return (
        <div onClick={stopBubbling}>
            <div className={style.case} id={`case-${id}`} onClick={editCase}>
                <span>{title}</span>
            </div>
        </div>
    );
});
