/* CUSTOM TEXT */

interface ICustomText {
    children?: React.ReactNode;
    fs?: string;
    fw?: string;
    m?: number;
    mb?: number;
}

/* THEME */

interface IColors {
    base: string;
    border: string;
    primary: string;
    secondary: string;
}

interface IFontSize {
    base: string;
    lg: string;
    xs: string;
}

interface IFontWeight {
    base: string;
    bold: string;
    light: string;
}

interface IStatusBar {
    style: string;
}

interface Itheme {
    colors: IColors;
    fontSize: IFontSize;
    fontWeight: IFontWeight;
    statusBar: IStatusBar;
}

/* USE METEO */

interface IProps {
    date: null | string;
}
