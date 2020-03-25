import React, { useState } from 'react';

import { LeftColumn } from '../LeftColumn';
import { RightColumn } from '../RightColumn';
import { lStorage } from '../../utils/lStorage';
import { ALL_CASE_IN_STORAGE } from '../../constants';

import style from './Application.module.less';

export const ApplicationContext = React.createContext(null);

export const Application = () => {
    const [listCases, setNewListCases] = useState(lStorage.get(ALL_CASE_IN_STORAGE) || []);

    const setListCases = newListCases => {
        setNewListCases(newListCases);
        lStorage.set(ALL_CASE_IN_STORAGE, newListCases);
    };

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
