import React, { useState } from 'react';

import { LeftColumn } from '../LeftColumn';
import { RightColumn } from '../RightColumn';

import style from './Application.module.less';

export const ApplicationContext = React.createContext(null);

const stubData = [
    {
        id: 0,
        title: 'Дело на утро',
        description: 'умыться, побриться, почистить смски'
    },
    {
        id: 1,
        title: 'Дело на вечер',
        description: 'что то есть'
    },
    {
        id: 2,
        title: 'Почитать',
        description: 'прочесть стопицот книг, вместо сна. И еды'
    },
    {
        id: 3,
        title: 'Заняться делом',
        description: 'покодить'
    }
];

export const Application = () => {
    const [listCases, setListCases] = useState(stubData);

    const context = {
        listCases,
        setListCases,
        editedCase: {
            id: null,
            title: '',
            description: ''
        }
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
