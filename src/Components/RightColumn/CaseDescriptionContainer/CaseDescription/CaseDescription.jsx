import React from 'react';

import style from './CaseDescription.module.less';

export const CaseDescription = ({ id, title, description }) => {
    return (
        <div className={style.container} id={id}>
            <span className={style.title}>{title}</span>
            <div className={style.fieldDescription}>
                <span className={style.description}>{description}</span>
            </div>
        </div>
    );
};
