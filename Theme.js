import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {amber, purple,teal, blueGrey, lightBlue} from '@material-ui/core/colors';
import usePrefersColorScheme  from 'use-prefers-color-scheme'
import { toggleTheme } from './store/appSlice';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: teal,
        secondary: blueGrey
    }
});

const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: lightBlue,
        secondary: purple
    }
});

const Theme = ({ children }) => {
    const dispatch = useDispatch();
    const {theme} = useSelector(state => state.app);
    const colorScheme = usePrefersColorScheme();

    useEffect(() => {
        dispatch(toggleTheme(colorScheme));
    }, [ colorScheme ]);

    return (
        <ThemeProvider theme={theme === 'dark' ? {...darkTheme} : {...lightTheme}}>
            {children}
            <CssBaseline />
        </ThemeProvider>
    );
};

export default Theme;