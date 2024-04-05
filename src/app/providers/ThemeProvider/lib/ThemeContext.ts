import { Theme } from './ThemeContext';
import { Enum } from "@/src/shared/utils/enum/enum";
import { createContext } from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme'