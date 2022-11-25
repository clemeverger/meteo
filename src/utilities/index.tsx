export const getDay = (date) => {
    switch (new Date(date).getDay()) {
        case 0:
            return "Lun.";
        case 1:
            return "Mar.";
        case 2:
            return "Mer.";
        case 3:
            return "Jeu.";
        case 4:
            return "Vend.";
        case 5:
            return "Sam.";
        case 6:
            return "Dim.";
    }
}

export const getHourly = (date) => {
    return new Date(date).toLocaleTimeString().slice(0, 5)
}