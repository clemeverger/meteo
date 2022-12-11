export const getWeeklyConditions = (ville: string): any =>
    fetch(`https://weather-api.mathisbarre.com/${ville}`).then((response: any) => {
        if (response.ok === true) {
            return response.json();
        } else {
            throw new Error('Error');
        }
    });

export const getHourlyConditions = (ville: string, date: string): any =>
    fetch(`https://weather-api.mathisbarre.com/${ville}/${date}`).then((response: any) => {
        if (response.ok === true) {
            return response.json();
        } else {
            throw new Error('Error');
        }
    });
