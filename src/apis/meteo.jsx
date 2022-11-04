export const getNext5DaysConditions = (ville) => fetch(`https://weather-api.mathisbarre.com/${ville}`).then(response => {
    if (!response.ok) {
        throw new Error('Erreur');
    }
    return response.json()
})

export const getHourlyConditions = (ville, date) => fetch(`https://weather-api.mathisbarre.com/${ville}/${date}`).then(response => {
    if (!response.ok) {
        throw new Error('Erreur');
    }
    return response.json()
})