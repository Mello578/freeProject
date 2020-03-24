import React, { useContext } from 'react';

import { ApplicationContext } from '../../Application';

import style from './CasesContainer.module.less';
import { Case } from './Case';

export const CasesContainer = () => {
    const cases = useContext(ApplicationContext).listCases;
    return (
        <div className={style.container}>
            {cases.map((item, key) => (
                <Case key={key} currentCase={item} />
            ))}
        </div>
    );
};
