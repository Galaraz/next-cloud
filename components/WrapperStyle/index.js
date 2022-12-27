import React from 'react';
import { useSelector } from 'react-redux';
import GlobalStyle from '../../styles/globals.css';

import { lightTheme, darkTheme } from '../../utils';

export default function WrapperStyle() {

    const dark = useSelector(state => state.dark);        

    return (
        <GlobalStyle theme={ !dark ? lightTheme : darkTheme} />
    );
}
