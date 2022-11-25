export const getWeeklyConditions = (ville) => fetch(`https://weather-api.mathisbarre.com/${ville}`).then(response => {
    if (!response.ok) {
        throw new Error('Error');
    }
    else {
        return response.json();
    }
})

export const getHourlyConditions = (ville, date) => fetch(`https://weather-api.mathisbarre.com/${ville}/${date}`).then(response => {
    if (!response.ok) {
        throw new Error('Error');
    }
    else {
        return response.json();
    }
})