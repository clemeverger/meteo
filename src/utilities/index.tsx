export const getDay = (date: string): string => {
    switch (new Date(date).getDay()) {
        case 0:
            return 'Lun.';
        case 1:
            return 'Mar.';
        case 2:
            return 'Mer.';
        case 3:
            return 'Jeu.';
        case 4:
            return 'Vend.';
        case 5:
            return 'Sam.';
        case 6:
            return 'Dim.';
        default:
            return 'Error';
    }
};

export const getHourly = (date: string): string => {
    return new Date(date).toLocaleTimeString().slice(0, 5);
};

export const wait = async (timeout: number): Promise<void> => {
    return await new Promise((resolve) => setTimeout(resolve, timeout));
};
