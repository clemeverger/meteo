export const getDay = (date) => {
    switch (new Date(date).getDay()) {
        case 0:
            return "Lundi";
        case 1:
            return "Mardi";
        case 2:
            return "Mercredi";
        case 3:
            return "Jeudi";
        case 4:
            return "Vendredi";
        case 5:
            return "Samedi";
        case 6:
            return "Dimanche";
    }
}

export const getHourly = (date) => {
    return new Date(date).toLocaleTimeString().slice(0, 5);
}