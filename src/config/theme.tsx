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

const theme: Itheme = {
    colors: {
        primary: '#000918',
        secondary: '#1b212f',
        base: '#ffffff',
        border: '#182231',
    },
    fontSize: {
        xs: '10',
        base: '14',
        lg: '18',
    },
    fontWeight: {
        light: '200',
        base: '400',
        bold: '600',
    },
    statusBar: {
        style: 'light',
    },
};

export default theme;
