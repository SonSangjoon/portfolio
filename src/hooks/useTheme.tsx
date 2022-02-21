import { useState } from 'react';
const useTheme = () => {
    const prefersColorScheme = window.matchMedia((prefers - color - scheme: dark)).matches
    ?'dark'
    : 'light';
const localTheme = localStorage.getItem('theme');
const initialTheme = localTheme || prefersColorScheme;
const [theme, setTheme] = useState(initialTheme);
return theme;
};
export default useTheme;