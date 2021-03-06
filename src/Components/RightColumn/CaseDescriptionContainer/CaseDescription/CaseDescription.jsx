import React from 'react';

import { stopBubbling } from '../../../../utils';

import style from './CaseDescription.module.less';

function Component({ id, title, description, editCase }) {
    return (
        <div onClick={stopBubbling}>
            <div className={style.container} id={`description-${id}`} onClick={editCase}>
                <span className={style.title}>{title}</span>
                <div className={style.fieldDescription}>
                    <span className={style.description}>{description}</span>
                </div>
            </div>
        </div>
    );
}

export const CaseDescription = React.memo(Component);
