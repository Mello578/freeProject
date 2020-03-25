import React, { useContext } from 'react';

import { ApplicationContext } from '../../Application';

import { CaseDescription } from './CaseDescription';

export const CaseDescriptionContainer = ({ editCase }) => {
    const { listCases } = useContext(ApplicationContext);
    return (
        <>
            {listCases.map(item => (
                <CaseDescription
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    id={item.id}
                    editCase={editCase}
                />
            ))}
        </>
    );
};
