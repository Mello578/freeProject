import React, { useState } from 'react';

import { LeftColumn } from '../LeftColumn';
import { RightColumn } from '../RightColumn';

import style from './Application.module.less';

export const ApplicationContext = React.createContext(null);

const stubData = ['Дело на утро', 'Сходить затусить', 'Сходить погулять', 'Дело на вечер'];

export const Application = () => {
    const [listCases, setListCases] = useState(stubData);

    const context = {
        listCases,
        setListCases
    };

    return (
        <div className={style.container}>
            <ApplicationContext.Provider value={context}>
                <LeftColumn />
                <RightColumn />
            </ApplicationContext.Provider>
        </div>
    );
};
