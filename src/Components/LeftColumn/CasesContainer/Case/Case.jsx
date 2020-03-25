import React from 'react';

import { stopBubbling } from '../../../../utils';

import style from './Case.module.less';

function Component({ id, title, editCase }) {
    return (
        <div onClick={stopBubbling}>
            <div className={style.case} id={`case-${id}`} onClick={editCase}>
                <span>{title}</span>
            </div>
        </div>
    );
}

export const Case = React.memo(Component);
