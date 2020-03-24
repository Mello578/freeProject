import React from 'react';

export const TextInputField = ({ value, changeEvent, children }) => {
    const onChange = e => {
        changeEvent(e.target.value);
    };

    return React.cloneElement(children, { value, onChange });
};
